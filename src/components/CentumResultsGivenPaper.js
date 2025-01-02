import React from 'react';

const CentumResultsGivenPaper = () => {
    const papers = [
        { subject: "Signals and Systems", classYear: "Anna Univ DE ECE – I /II", academicYear: "April 2008" },
        { subject: "Microwave Engineering", classYear: "ECE – IV /VII", academicYear: "Nov 2009" },
        { subject: "Mobile Communication", classYear: "ECE – IV /VIII", academicYear: "April 2010" },
        { subject: "Television and Video Engineering", classYear: "ECE – IV /VII", academicYear: "Nov 2010" },
        { subject: "Wireless Networks", classYear: "ECE – IV /VIII", academicYear: "April 2012" },
        { subject: "Principles of Management", classYear: "ECE – III /VI", academicYear: "Nov 2012" },
        { subject: "Professional Ethics and Human Values", classYear: "BE", academicYear: "Nov 2013" },
        { subject: "Television and Video Engineering", classYear: "BE", academicYear: "April 2014" },
        { subject: "Wireless Networks", classYear: "BE", academicYear: "Nov 2014" },
        { subject: "Professional Ethics and Human Values", classYear: "BE", academicYear: "April 2015" }
    ];

    return (
        <div className="md:p-16 p-4 pt-16">
            <h1 className="md:text-3xl text-xl font-bold mb-6">Centum Results Given Papers</h1>
            <div className="overflow-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border border-gray-300 px-2 md:px-4 py-2 text-left">S.No</th>
                            <th className="border border-gray-300 px-2 md:px-4 py-2 text-left">Subject</th>
                            <th className="border border-gray-300 px-2 md:px-4 py-2 text-left">Class Year / Sem</th>
                            <th className="border border-gray-300 px-2 md:px-4 py-2 text-left">Academic Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {papers.map((paper, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                }`}
                            >
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{paper.subject}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{paper.classYear}</td>
                                <td className="border border-gray-300 px-2 md:px-4 py-2">{paper.academicYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CentumResultsGivenPaper;
