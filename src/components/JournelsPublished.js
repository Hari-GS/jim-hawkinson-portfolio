import React from 'react';

const JournalsPublished = () => {
  return (
    <div className="journals-published-container flex flex-col space-y-6 md:p-16 p-4 pt-16 bg-gray-50">
      <h1 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">Journals Published</h1>
      {/* Journal 1 */}
      <div className="journal-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">S.Jim Hawkinson, ” Analysis and Performance Comparison of CMOS and FinFET for VLSI Applications”</h3>
        <p className="text-lg text-gray-700">
          International Journal of Emerging Technology and Advanced Engineering, Volume 3, Issue 2, pp 42-45, February 2013. 
          <span className="font-semibold">ISSN 2250–2459 (Online)</span>
        </p>
      </div>

      {/* Journal 2 */}
      <div className="journal-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">R.Baskar, S.Jim Hawkinson, ” Performance Analysis and Comparison of DRAM using CMOS and FinFET Technologies”</h3>
        <p className="text-lg text-gray-700">
          International Journal of Computer Applications (0975 – 8887). ISBN: 973-93-80873-94-0h.
        </p>
        <a href="http://www.ijcaonline.org/proceedings/ncves/number2/11316-1313" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Link to Paper
        </a>
      </div>

      {/* Journal 3 */}
      <div className="journal-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">Saravanan R, Kalaiyarasi M, S. Jim Hawkinson, D Sathya, ” Evaluation of Power Delay Product for Low Power Full Adder Circuits based on GDI Logic Cell using Mentor Graphics”</h3>
        <p className="text-lg text-gray-700">
          International Journal of Emerging Technology and Advanced Engineering, Volume 4, Issue 3, March 2014.
        </p>
        <p className="text-md text-gray-500">www.ijetae.com (ISSN 2250-2459, ISO 9001:2008 Certified Journal)</p>
      </div>

      {/* Journal 4 */}
      <div className="journal-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold text-gray-800">S.Praveenkumar, S. Jim Hawkinson, M.Vijayakumar, ” Performance Analysis Of Multiple Valued Gates”</h3>
        <p className="text-lg text-gray-700">
          South Asian Journal of Research in Engineering Science and Technology, Volume 2, Issue 3, April 2017.
        </p>
        <p className="text-md text-gray-500">www.sajrest.com (ISSN 2455-9261)</p>
      </div>

    </div>
  );
};

export default JournalsPublished;
