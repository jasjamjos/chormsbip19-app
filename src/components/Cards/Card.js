import React from 'react';

import CountUp from 'react-countup';

const Card = (props) => {
    const cardClass = `w-full sm:w-40 flex items-center justify-between sm:justify-center sm:flex-col p-5 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-${props.color}-100`
    const valueClass = `font-bold text-3xl sm:text-2xl antialiased text-${props.color}-900`

    return (
        <div className={cardClass}>
            <div className="h-12 w-12 sm:h-16 sm:w-16">
                {props.icon}
            </div>
            <div className="my-3 hidden sm:block">
                {props.title}
            </div>
            <div className={valueClass}>
                <CountUp
                    start={0}
                    end={props.data}
                    separator=","
                    duration={1.5}
                    useEasing={true}
                />
            </div>
        </div>
    );
}

export default Card;