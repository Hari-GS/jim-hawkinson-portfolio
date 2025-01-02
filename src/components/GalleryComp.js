import React from 'react';
import pic1 from '../assets/gallery photos/photo_1_2024-12-31_18-55-43.jpg';
import pic2 from '../assets/gallery photos/photo_2_2024-12-31_18-55-43.jpg';
import pic3 from '../assets/gallery photos/photo_3_2024-12-31_18-55-43.jpg';
import pic4 from '../assets/gallery photos/photo_4_2024-12-31_18-55-43.jpg';
import pic5 from '../assets/gallery photos/photo_5_2024-12-31_18-55-43.jpg';
import pic6 from '../assets/gallery photos/photo_6_2024-12-31_18-55-43.jpg';
import pic7 from '../assets/gallery photos/photo_7_2024-12-31_18-55-43.jpg';
import pic8 from '../assets/gallery photos/photo_8_2024-12-31_18-55-43.jpg';
import pic9 from '../assets/gallery photos/photo_9_2024-12-31_18-55-43.jpg';
import pic10 from '../assets/gallery photos/photo_10_2024-12-31_18-55-43.jpg';
import pic11 from '../assets/gallery photos/photo_11_2024-12-31_18-55-43.jpg';
import pic12 from '../assets/gallery photos/photo_12_2024-12-31_18-55-43.jpg';
import pic13 from '../assets/gallery photos/photo_13_2024-12-31_18-55-43.jpg';
import pic14 from '../assets/gallery photos/photo_14_2024-12-31_18-55-43.jpg';
import pic15 from '../assets/gallery photos/photo_15_2024-12-31_18-55-43.jpg';
import pic16 from '../assets/gallery photos/photo_16_2024-12-31_18-55-43.jpg';
import pic17 from '../assets/gallery photos/photo_17_2024-12-31_18-55-43.jpg';
import pic18 from '../assets/gallery photos/photo_18_2024-12-31_18-55-43.jpg';
import pic19 from '../assets/gallery photos/photo_19_2024-12-31_18-55-43.jpg';
import pic20 from '../assets/gallery photos/photo_20_2024-12-31_18-55-43.jpg';
import pic21 from '../assets/gallery photos/photo_21_2024-12-31_18-55-43.jpg';
import pic22 from '../assets/gallery photos/photo_22_2024-12-31_18-55-43.jpg';
import pic23 from '../assets/gallery photos/photo_23_2024-12-31_18-55-43.jpg';
import pic24 from '../assets/gallery photos/photo_24_2024-12-31_18-55-43.jpg';


const GalleryComp = () => {
    const images = [
        pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10,
    pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20,
    pic21, pic22, pic23, pic24
    ];

    return (
        <div className="p-12 bg-gray-100">
            <h1 className="text-2xl font-bold text-center mb-6">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        <img
                            src={image}
                            alt={`Gallery item ${index + 1}`}
                            className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryComp;
