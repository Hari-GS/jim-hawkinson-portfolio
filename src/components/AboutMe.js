import React from 'react'
import Contact from './Contact'

function AboutMe() {
    return (
       
        <section className="mt-8">
        <div className="md:grid grid-cols-3 gap-8">
            {/* About Me (2/3 column width) */}
            <div className="col-span-2 pr-5">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-2 text-gray-800">
                Prof. S. Jim Hawkinson received the B.E. Degree in Electronics and Communication Engineering 
                from SSM College of Engineering affiliated with Anna University Chennai in 2005, and an M.E. Degree 
                from Muthayammal Engineering College, Rasipuram affiliated with Anna University of Technology, Coimbatore, 
                India, in VLSI Design. Starting his career in the IT field, he worked for Blessing TV Internationals in 
                Singapore for a while and later transitioned to the teaching field as Asst. HoD of Information Technology 
                in TPT Polytechnic College, Salem. He then worked as Asst. Professor in Muthayammal Engineering College, 
                Rasipuram, India, and DMI St. Eugene University, Zambia. Currently, he is with EGS Pillay Engineering 
                College, Nagapattinam. He has authored over five research publications in international and national 
                journals. His areas of interest include theoretical modeling and simulation of nanoelectronic devices and 
                biomedical instrumentation. He is a life member of IETE, ISTE, VSI (VLSI Society of India), and IEEE. He has 
                visited Thailand, Sri Lanka, Singapore, and Malaysia for presenting research papers in various conferences. 
                He also served as the Joint Secretary of the IEEE India CASS (Circuits and Systems Society) Chapter. He is a 
                reviewer for journals such as the US-China Education Review B and the International Journal of Emerging 
                Technology and Advanced Engineering. He is currently pursuing research in Electron Devices under Anna 
                University, Chennai.
            </p>
            </div>

            {/* Contact Info (1/3 column width) */}
            <Contact/>
        </div>
        </section>
    )
}

export default AboutMe
