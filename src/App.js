import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Experience from './components/Experience';
import HumanAnatomyAndPhysiology from './components/notes/HumanAnatomyAndPhysiology';
import BiomedicalInstrumentation from './components/notes/BiomedicalInstrumentation';
import MedicalOptics from './components/notes/MedicalOptics';
import IPR2 from './components/notes/IPR2';
import AcademicProjects from './components/AcademicProjects';
import CentumResultsGivenPaper from './components/CentumResultsGivenPaper';
import Education from './components/Education';
import HonorsAndAwards from './components/HonorsAndAwards';
import JournalsPublished from './components/JournelsPublished';
import Memberships from './components/Memberships';
import PapersPresented from './components/PapersPresented';
import ProgrammesOrganized from './components/ProgramsOrganized';
import WorkshopsSeminarsCourses from './components/WorkshopsSeminarsCourses';
import GalleryComp from './components/GalleryComp';


function App() {
    return (
        <Router>
            <div className="flex">
                <SideBar/>
                <div className=" flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/notes1" element={<HumanAnatomyAndPhysiology />} />
                        <Route path="/notes2" element={<BiomedicalInstrumentation />} />
                        <Route path="/notes3" element={<MedicalOptics />} />
                        <Route path="/notes4" element={<IPR2 />} />
                        <Route path="/projects" element={<AcademicProjects />} />
                        <Route path="/results" element={<CentumResultsGivenPaper />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/gallery" element={<GalleryComp/>} />
                        <Route path="/awards" element={<HonorsAndAwards />} />
                        <Route path="/journals" element={<JournalsPublished />} />
                        <Route path="/societies" element={<Memberships />} />
                        <Route path="/papers" element={<PapersPresented />} />
                        <Route path="/programmes" element={<ProgrammesOrganized />} />
                        <Route path="/courses" element={<WorkshopsSeminarsCourses />} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
