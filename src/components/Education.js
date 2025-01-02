import React from 'react';

const Education = () => {
  return (
    <div className="education-container flex flex-col space-y-6 md:p-16 p-4 pt-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Education</h1>
      {/* Ph.D. Card */}
      <div className="education-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Ph.D. in Information and Communication Engineering</h3><br/>
        <p className="text-lg text-gray-700">
          Faculty of Information and Communication Engineering (Specialization in VLSI based Biomedical Devices)
        </p>
        <p className="text-md text-gray-500">Part-time under Anna University – Chennai (Currently Pursuing)</p>
      </div>

      {/* M.E. Card */}
      <div className="education-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">M.E. in Electronics and Communication Engineering</h3><br/>
        <p className="text-lg text-gray-700">(Specialization in VLSI Design)</p>
        <p className="text-md text-gray-500">
          Muthayammal Engineering College, Part-time under Anna University – Coimbatore, India
        </p>
        <p className="text-md text-gray-500">CGPA: 7.93, Completed in June 2011</p>
      </div>

      {/* B.E. Card */}
      <div className="education-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">B.E. in Electronics and Communication Engineering</h3><br/>
        <p className="text-lg text-gray-700">SSM College of Engineering, Anna University, Chennai, India</p>
        <p className="text-md text-gray-500">Percentage: 65%, Completed in May 2006</p>
      </div>

    </div>
  );
};

export default Education;
