import React from 'react';

const WorkshopsSeminarsCourses = () => {
  const events = [
    {
      title: '120 Minutes International Online Webinar on "Upcoming Trends in Wearable Electronics and Internet of Things (IoT)"',
      date: '15.10.22',
      organizer: 'NITTTR, Chennai',
    },
    {
      title: 'Webinar on “Applications of Artificial Intelligence in Healthcare Sectors”',
      date: '10th October 2022',
      organizer: 'Department of Biomedical Engineering and Internal Quality Assurance Cell (IQAC), Karpaga Vinayaga College of Engineering and Technology',
    },
    {
      title: 'AICTE Sponsored Staff Development Programme on Signal and Image Analysis Using Time / Frequency Transforms',
      date: '30th May 2011 to 12th June 2011',
      organizer: 'Dept of ECE, Muthayammal Engineering College',
    },
    {
      title: 'One day Workshop on “FPGA Based System Design using Altera Tools”',
      date: '28th January 2010',
      organizer: 'Dept of ECE, Muthayammal Engineering College',
    },
    {
      title: 'One day Workshop on “LABVIEW”',
      date: '28th January 2010',
      organizer: 'Dept of EIE, Muthayammal Engineering College',
    },
    {
      title: 'IEEE Sponsored Faculty Development Programme on FPGA Based System Design using EDA Tools',
      date: '11th and 12th September 2009',
      organizer: 'Karunya University',
    },
    {
      title: '“ORIENTATION AND FIRST AID TRAINING FOR PROGRAMME OFFICERS “',
      date: '26th and 27th March 2009',
      organizer: 'Academic campus, Anna University Coimbatore',
    },
    {
      title: 'One day seminar on “TCAD and IC CAD Technologies and FPGA Design using Silvaco and Tanner Tools (EC – CAD 08)”',
      date: '8th December 2007',
      organizer: 'Dept of ECE, Muthayammal Engineering College',
    },
    {
      title: 'One day workshop on Recent trends in MEMS Technology',
      date: '22nd August 2008',
      organizer: 'Dept of ECE, PSNA College of Technology, Dindigul',
    },
    {
      title: 'National level workshop on Wireless Communication and Network (WCNET-08)',
      date: '22nd March 2008',
      organizer: 'Oxford Engineering College, Trichy',
    },
    {
      title: 'One day seminar on “Current trends in VLSI design”',
      date: '8th December 2007',
      organizer: 'Dept of ECE, Karpagam College of Engineering, Coimbatore',
    },
  ];

  return (
    <div className="workshops-seminars-courses-container flex flex-col space-y-6 md:p-16 p-4 pt-16 bg-gray-50">
      <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">Workshops, Seminars and Short-term Courses attended</h1>
      {events.map((event, index) => (
        <div key={index} className="event-card bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
          <p className="text-md text-gray-600">{event.date}</p>
          <p className="text-sm text-gray-500">{event.organizer}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkshopsSeminarsCourses;
