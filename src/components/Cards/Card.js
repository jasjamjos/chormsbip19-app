import React from 'react';

import CountUp from 'react-countup';

const Card = (props) => {
    const cardClass = `flex items-center justify-center flex-col p-5 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-${props.color}-100`
    const valueClass = `font-bold text-2xl antialiased text-${props.color}-900`

    return (
        <div className={cardClass}>
            <div className="h-16 w-16">
                {props.icon}
            </div>
            <div className="my-3">
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