import React from 'react';
import { FaBuilding, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Changed FaPhone to FaPhoneAlt

function Contact() {
  return (
    <div className="mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className='text-3xl mb-4 text-[#7C4EE4] font-semibold'>GET IN TOUCH</p>
        <p className='text-lg text-gray-700'>
          We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, <br className="hidden md:block"/> feel free to reach out.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 hover:bg-[#7C4EE4] group text-center">
          <div className="mb-4 flex justify-center">
            <FaBuilding className="text-[#7C4EE4] group-hover:text-white transition-colors" size={48} />
          </div>
          <h3 className="text-[#7C4EE4] text-xl font-bold mb-2 group-hover:text-white transition-colors">Our Office</h3>
          <p className="text-gray-600 group-hover:text-white transition-colors">
            123 Blog Street, Suite 456 <br />
            Blogger City, BC 78901 <br />
            Country
          </p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 hover:bg-[#7C4EE4] group text-center">
          <div className="mb-4 flex justify-center">
            <FaEnvelope className="text-[#7C4EE4] group-hover:text-white transition-colors" size={48} />
          </div>
          <h3 className="text-[#7C4EE4] text-xl font-bold mb-2 group-hover:text-white transition-colors">Email Us</h3>
          <p className="text-gray-600 group-hover:text-white transition-colors">
            technext@blogs.com <br />
            support@technextblog.com
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 hover:bg-[#7C4EE4] group text-center">
          <div className="mb-4 flex justify-center">
            <FaPhoneAlt className="text-[#7C4EE4] group-hover:text-white transition-colors" size={48} />
          </div>
          <h3 className="text-[#7C4EE4] text-xl font-bold mb-2 group-hover:text-white transition-colors">Call Us</h3>
          <p className="text-gray-600 group-hover:text-white transition-colors">
            +1 (123) 456-7890 <br />
            Mon-Fri, 9am-5pm
          </p>
        </div>
      </div>

      {/* Location Banner and Contact Form Section */}
      <div className="relative max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.251419409848!2d144.96305791558996!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b9af022f01%3A0x1d04567b4629842a!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678987654321!5m2!1sen!2sau"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Map"
            className="w-full h-64 md:h-80 lg:h-96 object-cover" // Ensure responsiveness
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 lg:p-12 absolute w-[90%] md:w-3/4 lg:w-2/3 left-1/2 -translate-x-1/2 -bottom-60 md:-bottom-80 lg:-bottom-100 z-10 border-t-4 border-[#7C4EE4]">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#7C4EE4]">Send Us a Message</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
            <input
              type="tel"
              placeholder="Your Phone (Optional)"
              className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="col-span-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
            ></textarea>
            <button
              type="submit"
              className="col-span-full bg-[#7C4EE4] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#5E2DB8] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="h-80 md:h-100 lg:h-120"></div>
    </div>
  );
}

export default Contact;
