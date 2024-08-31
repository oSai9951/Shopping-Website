
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h1>
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/sai-maharana-56379b294/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://x.com/saimaharana01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaTwitter size={40} />
        </a>
        <a
          href="https://github.com/oSai9951"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
