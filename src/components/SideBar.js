import React, { useState } from 'react';
import { Link , useLocation  } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Import arrow icons
import { AiOutlineMenu } from 'react-icons/ai'; // Menu icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

function SideBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();  // Get the current route
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar

    function isActive(path){
        const flag = location.pathname === path
        
        return flag
    }

    return (
        <div>
            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
    className={`fixed lg:sticky top-0 left-0 h-screen bg-gray-800 p-6 overflow-y-auto custom-scrollbar transition-transform transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 lg:relative lg:block w-4/5 sm:w-3/4 md:w-64 z-10`}
    style={{ maxHeight: '100vh', overflowY: 'auto' }}
>
                <h1 className="text-2xl font-bold mb-8 text-white pt-10 md:pt-4">Jim Hawkinson</h1>
                <nav>
                    <ul className="space-y-5 text-start">
                        <li>
                            <Link
                                to="/" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/experience" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/experience') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Professional Experience
                            </Link>
                        </li>
                        
                        {/* Dropdown for Subject Related Notes */}
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-gray-300 hover:text-blue-500 w-full text-left flex items-center space-x-2"
                            >
                                <span>Subject Related Notes</span>
                                <span>
                                    {isDropdownOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                                </span>
                            </button>
                            <ul
                                className={`absolute left-0 top-full bg-gray-700 p-3 space-y-2 w-48 shadow-lg transition-all duration-300 ${
                                    isDropdownOpen
                                        ? 'opacity-100 translate-y-3'
                                        : 'opacity-0 -translate-y-5 pointer-events-none'
                                }`}
                                style={{
                                    zIndex: 50, // Ensure visibility
                                }}
                            >
                                <li>
                                    <Link to="/notes1" onClick={() => setIsSidebarOpen(false)} className={`hover:text-blue-500 ${isActive('/notes1') ? 'text-blue-500' : 'text-gray-300'}`}>
                                        Human Anatomy and Physiology
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notes2" onClick={() => setIsSidebarOpen(false)} className={`hover:text-blue-500 ${isActive('/notes2') ? 'text-blue-500' : 'text-gray-300'}`}>
                                        Biomedical Instrumentation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notes3" onClick={() => setIsSidebarOpen(false)} className={`hover:text-blue-500 ${isActive('/notes3') ? 'text-blue-500' : 'text-gray-300'}`}>
                                        Medical Optics
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notes4" onClick={() => setIsSidebarOpen(false)} className={`hover:text-blue-500 ${isActive('/notes4') ? 'text-blue-500' : 'text-gray-300'}`}>
                                        IPR
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link
                                to="/projects" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/projects') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Academic Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/results" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/results') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Centum Results Given Papers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/education" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/education') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/gallery" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/gallery') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/awards" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/awards') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Honors and Awards
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/journals" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/journals') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Journals Published
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/societies" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/societies') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Membership in Scientific and Professional Societies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/papers" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/papers') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Paper Presented / Published in Conferences
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/programmes" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/programmes') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Programmes Organized as Coordinator
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses" onClick={() => setIsSidebarOpen(false)}
                                className={` hover:text-blue-500 ${isActive('/courses') ? 'text-blue-500' : 'text-gray-300'}`}
                            >
                                Workshops, Seminars and Short-term Courses attended
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
             {/* Overlay for Mobile Sidebar */}
             {/* {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )} */}
        </div>
    );
}

export default SideBar;
