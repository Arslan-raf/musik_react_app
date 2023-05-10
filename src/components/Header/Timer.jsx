import React, { useState, useEffect } from "react";


const Timer = () => {
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = new Date(2023, 6, 27);

    const getTime = () => {
        const time = deadline - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <div className="timer__items">
                <div className="timer__item timer__days">{days}</div>
                <p>d</p>
                <div className="timer__item timer__hours">{hours}</div>
                <p>h</p>
                <div className="timer__item timer__minutes">{minutes}</div>
                <p>m</p>
                <div className="timer__item timer__seconds">{seconds}</div>
                <p>s</p>
            </div>
        </div>
    )
}

export default Timer