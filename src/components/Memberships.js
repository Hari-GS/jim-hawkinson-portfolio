import React from 'react';

const Memberships = () => {
  return (
    <div className="memberships-container flex flex-col space-y-6 md:p-16 p-4 pt-16 bg-gray-50">
      <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">Membership in Scientific and Professional Societies</h1>
      {/* Membership 1 */}
      <div className="membership-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Life Member</h3>
        <p className="text-lg text-gray-700">Biomedical Engineering Society of India (BMESI), INDIA</p>
      </div>

      {/* Membership 2 */}
      <div className="membership-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Life Member</h3>
        <p className="text-lg text-gray-700">International Association of Computer Science and Information Technology (IACSIT), Singapore</p>
      </div>

      {/* Membership 3 */}
      <div className="membership-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Life Member</h3>
        <p className="text-lg text-gray-700">International Association of Engineers (IAENG)</p>
      </div>

      {/* Membership 4 */}
      <div className="membership-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Life Member</h3>
        <p className="text-lg text-gray-700">Indian Society for Technical Education (ISTE), India</p>
      </div>

      {/* Membership 5 */}
      <div className="membership-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Life Member</h3>
        <p className="text-lg text-gray-700">Institution of Electronics and Telecommunication Engineers (IETE), India</p>
      </div>

    </div>
  );
};

export default Memberships;
