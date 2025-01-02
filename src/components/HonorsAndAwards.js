import React from 'react';

const HonorsAndAwards = () => {
  return (
    <div className="honors-and-awards-container flex flex-col space-y-6 md:p-16 p-4 pt-16 bg-gray-50">
      <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Honors and Awards</h1>  
      {/* Executive Committee Member & Joint Secretary Award */}
      <div className="award-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Executive Committee Member & Joint Secretary</h3>
        <p className="text-lg text-gray-700">IEEE India CASS Chapter</p>
      </div>

      {/* Best Student Volunteer Award */}
      <div className="award-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Best Student Volunteer</h3>
        <p className="text-lg text-gray-700">RSP, 2001</p>
      </div>

    </div>
  );
};

export default HonorsAndAwards;
