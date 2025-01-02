import React from "react";

// Importing necessary icons from React Icons library for LinkedIn, Facebook, and WhatsApp
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto my-8 ">
      <h2 className="md:text-2xl font-semibold text-center text-gray-800 mb-4">
        Contact Information
      </h2>

      {/* Personal Details Section */}
      <div className="personal-details space-y-4 mb-6">
        <p className="md:text-lg text-gray-700">
          <strong>Name:</strong> S. Jim Hawkinson, M.E.,(Ph.D).
        </p>
        <p className="md:text-lg text-gray-700">
          <strong>Address:</strong> 51, Perumal North Street, Nagapattinam - 611001
        </p>
        <p className="md:text-lg text-gray-700">
          <strong>Mobile:</strong> 8807728684
        </p>
        <p className="md:text-lg text-gray-700">
          <strong>Email:</strong> <a href="mailto:jim.hawkinson@gmail.com" className="text-blue-500 hover:underline">jim.hawkinson@gmail.com</a>, <a href="mailto:jimhawkinson@egspec.org" className="text-blue-500 hover:underline">jimhawkinson@egspec.org</a>
        </p>
      </div>

      {/* Social Media Links Section */}
      <h3 className="md:text-xl font-semibold text-center text-gray-800 mb-4">Connect With Me</h3>
      <div className="social-links space-y-4">
        {/* LinkedIn */}
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-blue-700 md:text-2xl" />
          <a
            href="https://www.linkedin.com/in/jim-hawkinson-3744a7a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-700 md:text-lg"
          >
            LinkedIn
          </a>
        </div>

        {/* Facebook */}
        <div className="flex items-center space-x-2">
          <FaFacebook className="text-blue-600 md:text-2xl" />
          <a
            href="https://www.facebook.com/hawkinson2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 md:text-lg"
          >
            Facebook
          </a>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center space-x-2">
          <FaWhatsapp className="text-green-500 md:text-2xl" />
          <a
            href="https://whatsapp.com/channel/0029Vb0kjrS6BIEYpbdUqu1Y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-green-500 md:text-lg"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>

  );
};

export default Contact;
