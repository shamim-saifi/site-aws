import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgentUpateProfileApi } from "../../redux/actions/agentAction";

const AgentProfileEdit = () => {
  const { agentProfile } = useSelector((state) => state.agentContainer);

  const [formData, setFormData] = useState({
    profileImagePreviewUrl: agentProfile?.agentProfile?.url || null,
    firstName: agentProfile?.firstName || '',
    lastName: agentProfile?.lastName || '',
    email: agentProfile?.email || '',
    phone: agentProfile?.phone || '',
    address: agentProfile?.address || '',
    companyName: agentProfile?.companyName || '',
    country: agentProfile?.country || '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setFormData((prev) => ({
            ...prev,
            profileImagePreviewUrl: reader.result,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.profileImagePreviewUrl)
      newErrors.profileImagePreviewUrl = "Please upload a profile image";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (validate()) {
        const {
          firstName,
          lastName,
          email,
          phone,
          country,
          companyName,
          profileImagePreviewUrl,
        } = formData;
        await dispatch(
          AgentUpateProfileApi(
            firstName,
            lastName,
            email,
            phone,
            country,
            companyName,
            profileImagePreviewUrl
          )
        );
      }
    },
    [formData]
  );

  return (
    <section className="m-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 sm:p-10 shadow-lg space-y-8"
      >
        <h2 className="text-2xl font-bold text-orange-600">Edit Profile</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex flex-col gap-2 w-full max-w-[200px]">
            <label className="font-semibold text-gray-700">
              Profile Image <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="profileImage"
              className={`w-full aspect-square border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400 cursor-pointer ${formData.profileImagePreviewUrl ? "p-0" : "p-4"
                }`}
            >
              {formData.profileImagePreviewUrl ? (
                <img
                  src={formData.profileImagePreviewUrl}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-center">Click to upload</span>
              )}
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
            {errors.profileImagePreviewUrl && (
              <p className="text-sm text-red-500">{errors.profileImagePreviewUrl}</p>
            )}
          </div>

          {/* Form Fields */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country name"
                className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-medium text-gray-700">Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your address"
                className="w-full mt-2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-md border text-orange-600 border-orange-400 hover:bg-orange-50 transition cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AgentProfileEdit;
