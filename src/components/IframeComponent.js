import React from "react";

const IframeComponent = ({ src, title,gDrive}) => {
  return (
    <div>
    <h2 className="mb-2">{title}</h2>
    {/* Button to open in a new tab */}
    <a href={gDrive} target="_blank" rel="noopener noreferrer">
    <button
      className="mb-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
    >
      Open in New Tab
    </button>
  </a>
  <iframe
        src={src}
        title={title}
        className="w-5/5 md:h-[600px] h-[400px] border-2 border-black rounded-lg md:w-3/6"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default IframeComponent;
