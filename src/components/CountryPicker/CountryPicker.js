import React, { useState, useEffect, useRef } from 'react';

import { fetchCountries } from '../../api';

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('Global');
    const [display, setDisplay] = useState(false)
    const wrapperRef = useRef(null);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }

        fetchAPI();
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, []);

    const handleClickOutside = (event) => {
        const {current: wrap} = wrapperRef;
        if (wrap && !wrap.contains(event.target)) return setDisplay(false);
    }

    const results = () => {
        return search.length > 0 && search != 'Global' 
        ? (
            <div className="h-32 absolute border border-gray-200 bg-white inset-0 z-10 mt-12 rounded bg-opacity-100 hs shadow overflow-y-auto">
                {countries.filter(([{name}]) => name.toLowerCase().indexOf(search.toLowerCase()) > -1).map(([country], idx) => {
                    let { name, code} = country;
        
                    if (code) return (
                        <div
                            onClick={() => handleSearch(name)}
                            className="flex items-center p-3 focus:outline-none focus:font-bold hover:font-bold cursor-pointer"
                            key={code}
                            tabIndex="0"
                        >
                            <img alt={country.code} className="h-5 w-5" src={`https://www.countryflags.io/${code}/flat/64.png`} />
                            <span className="pl-3">{name}</span>
                        </div>
                    )}
                )}
            </div>
        ) : '';
        
    }

    const handleSearch = (query) => {
        setSearch(query);
        setDisplay(false);
    }

    const handleReset = () => {
        setSearch('Global');
        setDisplay(false);
    }

    const handleInput = (event) => {
        setDisplay(true);
        handleFocus(event);
    }

    const handleFocus = (event) => event.target.select();
    
    return (
        <div className="flex items-center justify-center my-5">
            <div ref={wrapperRef} className="relative flex items-center w-full">
                <input 
                    type="text"
                    className="px-3 py-2 text-lg rounded focus:outline-none border focus:border-gray-500 w-full pl-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={(e) => handleInput(e)}
                />
                <div className="absolute ml-2">
                    { search.length > 0 && search != 'Global'
                    ? <svg onClick={handleReset} className="h-6 w-6 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    : <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    }
                </div>
                { display && (
                    results()
                )}
            </div>
        </div>
    );
}

export default CountryPicker;