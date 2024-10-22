import React from 'react';

const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const GlassButton = ({ text, onClick }) => {
    return (
        <button
        onClick={() => handleScroll('pendaftaran')}
            className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 text-white text-lg font-semibold py-2 px-4 rounded-lg transition-transform transform  focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
            {text}
        </button>
    );
};

export default GlassButton;
