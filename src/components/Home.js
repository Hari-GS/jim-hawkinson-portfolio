import React from 'react';
import AboutMe from './AboutMe';
import dp from '../assets/dp.jpg';
import banner from '../assets/banner2.webp';

function Home() {
    return (
        <div className="p-4 md:p-8 bg-gray-50">
            {/* Banner */}
            <div className="relative h-40 md:h-60 bg-gray-700 rounded-lg overflow-hidden">
                <img
                    src={banner}
                    alt="Banner"
                    className="object-cover w-full h-full object-bottom"
                />
            </div>
            {/* Profile Section */}
            <section className="flex flex-col items-center mt-6 md:flex-row md:items-start">
                <div className="w-24 h-24 md:w-32 md:h-32">
                    <img
                        src={dp}
                        alt="Profile"
                        className="w-full h-full rounded-full border-4 border-gray-800 object-cover object-top"
                    />
                </div>

                <div className="mt-4 text-center md:mt-0 md:ml-6 md:text-left">
                    <h2 className="text-xl md:text-3xl font-bold">Jim Hawkinson</h2>
                    <p className="text-gray-400 text-sm md:text-base">Assistant Professor</p>
                </div>
            </section>

            {/* About Me Section */}
            <AboutMe />
        </div>
    );
}

export default Home;
