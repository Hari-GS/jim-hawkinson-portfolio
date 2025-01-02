import React from 'react';

const PapersPresented = () => {
  const papers = [
    {
      title: 'Performance Analysis and Comparison of Dram using CMOS and FinFET Technologies',
      conference: 'Third National Conference on VLSI, EMBEDDED SYSTEMS, SIGNALPROCESSING AND COMMUNICATION (VESCOM - 2013), Kongu Engineering College, Erode',
      date: '20th March 2013',
      page: 'Page no 14-18',
    },
    {
      title: 'Modelling and Simulation of FinFET SRAM Beyond CMOS Technologies',
      conference: 'National Conference on "Trends In Automotive Parts Systems and Applications" - TAPSA 2013, Society of Automotive Engineering (SAE) INDIA SKCET Collegiate Club, Coimbatore - 08, Tamil Nadu, India',
      date: '14th March 2013',
    },
    {
      title: 'Analysis and Performance Comparison of CMOS and FinFET for VLSI Applications',
      conference: 'The Second International Congress of Interdisciplinary Research and Development, Bangkok, Thailand',
      date: '1st June 2012',
    },
    {
      title: 'Analysis and Performance Comparison of CMOS and FinFET for VLSI Applications',
      conference: 'National Conference on Electronic Technologies- 2k12, Goa College of Engineering, Goa',
      date: '13th & 14th April 2012',
      page: 'Page.No: 161-164',
    },
    {
      title: 'Self Disposal And Lock Method For Expired Consumer Products',
      conference: 'National Conference on Advanced Materials and Processing Technologies- AMPT 2012, School of Engineering and Technology and Center of Research and Development, PRIST University, Vallam, Thanjavur',
      date: '17th and 18th February 2012',
    },
    {
      title: 'Reduced Transition Pipelining for Digital Signal Processing Applications',
      conference: 'National Conference on Communication, VLSI and Signal Processing, Rajaas Engineering College, Vadakkankulam',
      date: '7th & 8th April 2011',
    },
    {
      title: 'Performance Comparison of CMOS and FinFET for VLSI Applications',
      conference: 'National Conference on Communication, VLSI and Signal Processing, Rajaas Engineering College, Vadakkankulam',
      date: '7th & 8th April 2011',
    },
    {
      title: 'Personal Area Network for Biomedical Monitoring System',
      conference: 'ICACS -2010, KSR College of Technology, Thiruchengode',
      date: '10th February 2010',
    },
    {
      title: 'Cancer curing using Nanotechnology',
      conference: 'National Conference on Computer Applications, CTCA-08, Muthayammal Engineering College, Rasipuram',
      date: '27th February 2008',
    },
    {
      title: 'Cancer curing using Nanotechnology',
      conference: 'State level seminar on "Growth and Applications of Nanotechnology", NANTEC-08, Muthayammal Arts and Science College, Rasipuram',
      date: '24th and 25th January 2008',
    },
    {
      title: 'VLSI Design For Future Mobile Communication And Applications',
      conference: 'International seminar on innovation – the corporate mantra in the era of globalization',
      date: '26th October 2007',
    },
  ];

  return (
    <div className="papers-presented-container flex flex-col space-y-6 md:p-16 p-4 pt-16 bg-gray-50">
      <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">Paper Presented / Published in Conferences</h1>
      {papers.map((paper, index) => (
        <div key={index} className="paper-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-gray-800">{paper.title}</h3>
          <p className="text-lg text-gray-700">{paper.conference}</p>
          <p className="text-md text-gray-600">{paper.date}</p>
          {paper.page && <p className="text-md text-gray-600">({paper.page})</p>}
        </div>
      ))}
    </div>
  );
};

export default PapersPresented;
