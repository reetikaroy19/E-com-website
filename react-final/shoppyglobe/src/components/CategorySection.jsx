import React from 'react';
import MenCetegory from '../assets/Images/men.png';
import WomenCetegory from '../assets/Images/women.jpg';
import kidCetegory from '../assets/Images/kid.png';


const Categories = [
    {
        title: 'Men',
        imageUrl: MenCetegory,
    },
    {
        title: 'Women',
        imageUrl: WomenCetegory,
    },
    {
        title: 'kids',
        imageUrl: kidCetegory,
    },
];

function CategorySection() {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Categories.map((Category, index) => (
                <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src={Category.imageUrl} alt=""  className="w-full h-full object-cover rounded-lg shadow-md" />
                    <div className="absolute top-20 left-12">
                        <p className="text-xl font-bold">{Category.title}</p>
                        <p className="text-gray-600">View All</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategorySection;