import React, { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAgentProfileApi } from '../../redux/actions/agentAction';
import fallbackAvatar from '../../assets/mission.jpg'; // fallback image

const AgentProfile = () => {
  const { agentProfile, agentLoading } = useSelector((state) => state.agentContainer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAgentProfileApi());
  }, [dispatch]);

  const user = {
    userAvatar: agentProfile?.agentProfile?.url || fallbackAvatar,
    firstName: agentProfile?.firstName || 'N/A',
    lastName: agentProfile?.lastName || 'N/A',
    email: agentProfile?.email || 'N/A',
    phone: agentProfile?.phone || 'N/A',
    address: agentProfile?.address || 'N/A',
    companyName: agentProfile?.companyName || 'N/A',
    country: agentProfile?.country || 'N/A',
  };

  if (agentLoading) {
    return (
      <section className="m-4 flex justify-center items-center h-[80vh]">
        <div className="text-lg font-medium text-orange-600 animate-pulse">
          Loading agent profile...
        </div>
      </section>
    );
  }

  return (
    <section className="m-2.5 sm:m-5 space-y-5">
      <div className="bg-white rounded-xl p-5 sm:p-10 min-h-[95vh] flex flex-col gap-y-10 shadow border border-gray-100">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600">Agent Profile</h2>
          <p className="text-sm text-gray-500">Your account information is shown below.</p>
        </div>

        {/* Profile Content */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center">
          {/* Avatar */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-orange-100 shadow-md">
            <img
              src={user.userAvatar}
              alt="User Avatar"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => (e.target.src = fallbackAvatar)}
            />
          </div>

          {/* Details */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'First Name', value: user.firstName },
              { label: 'Last Name', value: user.lastName },
              { label: 'Email', value: user.email },
              { label: 'Phone', value: user.phone },
              { label: 'Address', value: user.address, colSpan: true },
              { label: 'Company Name', value: user.companyName },
              { label: 'Country', value: user.country },
            ].map((item, idx) => (
              <div key={idx} className={item.colSpan ? 'sm:col-span-2' : ''}>
                <h6 className="text-sm font-medium text-gray-500">{item.label}:</h6>
                <p className="text-lg font-semibold text-gray-800">{item.value || 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <Link
            to="edit"
            className="flex items-center gap-2 bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-orange-700 transition duration-200"
          >
            <FiEdit className="text-lg" />
            Edit Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;
