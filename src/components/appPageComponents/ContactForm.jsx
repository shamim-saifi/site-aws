import axios from 'axios';
import React, { useState } from 'react';
import { server } from '../../redux/store';

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "", email: "", subject: "", message: ""
  })

  const onValueChange = (e) => {
    const { name, value } = e.target
    setFormData((pre) => ({ ...pre, [name]: value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    const { firstName, email, subject, message } = formData
    setLoading(true)
    try {
      const { data } = await axios.post(`${server}/contact`,
        { firstName, email, subject, message },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      setLoading(false)

      alert(data?.message ? data?.message : "Our team will contact you shortly")


    } catch (error) {
      console.log(error)
    }

  }


  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 px-6 py-16 bg-gray-50 min-h-screen">
      {/* Left: Contact Form */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <p className="text-lg text-blue-600 font-semibold">
          Call or WhatsApp us at <span className="font-bold">+91-7011741092</span>
        </p>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <input
              onChange={onValueChange}
              name="firstName"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              onChange={onValueChange}
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              onChange={onValueChange}
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <textarea
              onChange={onValueChange}
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Loading..." : "Send Message"}

          </button>
        </form>
      </div>

      {/* Right: Google Map */}
      <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-xl">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8190660858677!2d77.42288318885497!3d28.605204300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef1341438e9d%3A0x5f7dd3497a8f0d0a!2sGaur%20City%20Center!5e0!3m2!1sen!2sin!4v1761894592823!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ minHeight: '400px', border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>


      </div>
    </section>
  );
};

export default ContactForm;
