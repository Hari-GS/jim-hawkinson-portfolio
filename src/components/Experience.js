import React from 'react';

const experiences = [
  {
    date: "October 2022 to Present",
    title: "Asst. Prof, Dept. of Biomedical Engineering",
    location: "E.G.S. Pillay Engineering College (Autonomous), Nagapattinam, India",
    responsibilities: [
      "Public Affairs Officer, Group of Institutions",
      "Department Association Coordinator - Biomeedeers",
      "Faculty Advisor - BMESI Student Chapter",
      "BOS Coordinator",
      "Department Timetable Incharge",
      "Department NBA Coordinator",
      "Department Project Coordinator",
    ],
  },
  {
    date: "September 2015 to October 2022",
    title: "Asst. Prof, Dept. of Electronics and Communication Engineering",
    location: "E.G.S. Pillay Engineering College, Nagapattinam, India",
    responsibilities: [
      "Placement Officer (2015-16)",
      "Chief Warden (2015-16)",
      "Department Library Incharge (2016 onwards)",
      "Class Advisor (2016-2017)",
      "Project Expert Team (2016 onwards) for UG & PG",
      "Motivated students to carry out various projects and present papers in contests, winning prizes at various levels",
    ],
  },
  {
    date: "July 2014 to June 2015",
    title: "Asst. Lecturer, Institute of Virtual and Distance Learning",
    location: "D.M.I. St. Eugene University, Zambia",
    responsibilities: [
      "Creating Modules for the Courses",
      "Floor Manager of Studios",
      "Exam Committee Coordinator",
    ],
  },
  {
    date: "September 2007 - May 2014",
    title: "Asst. Prof, Dept. of Electronics and Communication Engineering",
    location: "Muthayammal Engineering College, Rasipuram, India",
    responsibilities: [
      "Coordinator - National Level Technical Symposium (ELCOMM 13)",
      "Organizing Secretary - MULTICON 2012",
      "Class Advisor (2007-2008)",
      "College Sports Coordinator (2008-2014)",
      "Placement Coordinator (2009-2014)",
      "Best Placement Coordinator (2012)",
      "Organized NSS Special Programming Camps and RRC Programmes",
    ],
  },
  {
    date: "December 2006 - August 2007",
    title: "Lecturer, Department of Information Technology",
    location: "Thiyagarajar Polytechnic College, Rasipuram, India",
    responsibilities: [
      "Established Advanced Computer Lab",
      "Developed equipment maintenance software using Visual Basic",
      "Project Coordinator for Computer Science and IT Departments",
    ],
  }
];

const Experience = () => {
  return (
    <div className="bg-gray-50 md:p-16 p-4 pt-16">
      <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">Professional Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {experience.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{experience.location}</p>
            <p className="text-sm text-gray-500 mb-4 italic">{experience.date}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
