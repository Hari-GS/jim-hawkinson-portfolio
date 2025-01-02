import React from 'react';

const ProgrammesOrganized = () => {
  const programmes = [
    {
      title: 'Coordinator – Synocura- 24 National level Technical Symposium',
      date: '05.10.24',
    },
    {
      title: 'Member Secretary- WSW - 24, along with ISRO-IPRC held at E.G.S.Pillay Engineering College',
      date: '',
    },
    {
      title: 'Coordinator for Aksharam - 2022, 2023, 2024',
      date: '',
    },
    {
      title: 'Coordinator – ELCOMM 13 National level Technical Symposium',
      date: '27.02.2013',
    },
    {
      title: 'Co- Coordinator – AICTE Sponsored seminar on MEMS/ Nanotechnology Integration for Biomedical Applications',
      date: '24.05.2012 - 25.05.2012',
    },
    {
      title: 'Organizing Secretary- MULTICON (International Conference on Advanced Communication Technologies – 2012)',
      date: '20.04.2012 - 21.04.2012',
    },
    {
      title: '6th National Festive of Science and Engineering Schools',
      date: '02.03.2012',
    },
    {
      title: 'TCS Sponsored RFID Workshop',
      date: '07.02.2011',
    },
    {
      title: 'IETE sponsored Skill development programme for unemployed youth',
      date: '09.04.2009 – 10.04.2009',
    },
    {
      title: 'Faculty Development programme on Agilent Multipurpose Lab Station',
      date: '15.09.2008',
    },
  ];

  return (
    <div className="programmes-organized-container flex flex-col space-y-6 md:p-16 p-4 pt-16 bg-gray-50">
      <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">Programmes Organized as Coordinator</h1>
      {programmes.map((programme, index) => (
        <div key={index} className="programme-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-gray-800">{programme.title}</h3>
          {programme.date && <p className="text-md text-gray-600">{programme.date}</p>}
        </div>
      ))}
    </div>
  );
};

export default ProgrammesOrganized;
