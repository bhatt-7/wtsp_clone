import React, { useState } from 'react';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="p-4 bg-[#111b21] relative">
            <svg
                viewBox="0 0 24 24"
                height="30"
                width="30"
                className={`absolute left-6 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${isFocused ? 'opacity-0' : 'opacity-100'
                    }`}
                fill="#84949e"
            >
                <title>search</title>
                <path d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path>
            </svg>

            <svg
                viewBox="0 0 24 24"
                height="30"
                width="30"
                className={`absolute left-5 top-[45%] transform -translate-y-1/2 transition-all duration-300 ${isFocused ? 'opacity-100 rotate-[360deg]' : 'opacity-0 rotate-0'
                    }`}
                fill="#84949e"
            >
                <title>arrow</title>
                <path
                    d="M25.002,16c0,0.5522-0.4473,1-1,1H9.8672l4.9629,7.4453c0.3066,0.4595,0.1826,1.0806-0.2773,1.3867   C14.3818,25.9458,14.1895,26,13.999,26c-0.3232,0-0.6406-0.1563-0.833-0.4453L6.7959,16l6.3701-9.5547   c0.3057-0.46,0.9248-0.5845,1.3867-0.2773c0.46,0.3062,0.584,0.9272,0.2773,1.3867L9.8672,15H24.002   C24.5547,15,25.002,15.4478,25.002,16z"
                    fill="#01a882"
                />
            </svg>

            <input
                type="text"
                placeholder="Search chats..."
                className="w-full p-2 pl-14 bg-[#202c33] rounded-md focus:outline-none placeholder-white"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
};

export default SearchBar;
