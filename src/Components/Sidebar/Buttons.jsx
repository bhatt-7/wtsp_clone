import React, { useState } from 'react';

const Buttons = () => {
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='flex space-x-3 ml-5 mb-2 flex-wrap'>
            <button
                className={`border-none outline-none w-[fit-content] px-4 py-1 text-md rounded-full ${activeButton === 'All' ? 'bg-[#0a332c] text-[#00a17f]' : 'bg-[#202c33] text-[#606e77]'}`}
                onClick={() => handleButtonClick('All')}
            >
                All
            </button>
            <button
                className={`border-none outline-none w-[fit-content] px-4 py-1 text-md rounded-full ${activeButton === 'Unread' ? 'bg-[#0a332c] text-[#00a17f]' : 'bg-[#202c33] text-[#606e77]'}`}
                onClick={() => handleButtonClick('Unread')}
            >
                Unread
            </button>
            <button
                className={`border-none outline-none w-[fit-content] px-4 py-1 text-md rounded-full ${activeButton === 'Favourites' ? 'bg-[#0a332c] text-[#00a17f]' : 'bg-[#202c33] text-[#606e77]'}`}
                onClick={() => handleButtonClick('Favourites')}
            >
                Favourites
            </button>
            <button
                className={`border-none outline-none w-[fit-content] px-4 py-1 text-md rounded-full ${activeButton === 'Groups' ? 'bg-[#0a332c] text-[#00a17f]' : 'bg-[#202c33] text-[#606e77]'}`}
                onClick={() => handleButtonClick('Groups')}
            >
                Groups
            </button>
        </div>
    );
};

export default Buttons;
