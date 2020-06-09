import React from 'react';

const CountryPicker = () => {
    return (
        <div className="flex items-center justify-center my-5">
            <div className="relative flex items-center w-full">
                <input 
                    type="text"
                    className="px-3 py-2 text-lg rounded focus:outline-none border focus:border-gray-500 w-full pl-10"
                />
                <div className="absolute ml-2">
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
            </div>
        </div>
    );
}

export default CountryPicker;