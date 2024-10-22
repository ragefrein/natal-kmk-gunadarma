import React from 'react';
import Slider from 'react-slick';

const cardData = [
    {
        title: "Helena",
        description: "PO nih bos",
        imageUrl: "https://via.placeholder.com/200", // Placeholder image with 200x200 size
    },
    {
        title: "Card Title 2",
        description: "This is the description for Card 2.",
        imageUrl: "https://via.placeholder.com/200", // Placeholder image with 200x200 size
    },
    {
        title: "Card Title 3",
        description: "This is the description for Card 3.",
        imageUrl: "https://via.placeholder.com/200", // Placeholder image with 200x200 size
    },
    {
        title: "Card Title 4",
        description: "This is the description for Card 4.",
        imageUrl: "https://via.placeholder.com/200", // Placeholder image with 200x200 size
    },
];

const CardSlider = ({ cards }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-md mx-auto overflow-hidden px-4"> {/* Center the slider and set a max width */}
            <Slider {...settings} className="overflow-hidden">
                {cards.map((card, index) => (
                    <div key={index} className="px-2">
                        <div className=" border rounded-lg shadow-lg overflow-hidden h-64 w-full bg-emerald-800"> {/* Full width within max container */}
                            <div className="h-48 w-full flex justify-center items-center"> {/* Fixed height for image container */}
                                <img
                                    src={card.imageUrl}
                                    className="max-w-full max-h-full object-cover" // Ensure the image fits within the container
                                />
                            </div>
                            <div className="p-2">
                                <h2 className="text-sm font-bold text-white">{card.title}</h2>
                                <p className="mt-1 text-white text-xs">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardSlider;
