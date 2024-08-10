import React, { useState, useEffect, useContext } from 'react';
import {timerReturn} from "../context/timerReturn.js"

const Timer = (props) => {
    const [seconds, setSeconds] = useState(props?.time ? props.time : 10);
    const {timerStopReturn, setTimerStopReturn } = useContext(timerReturn)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds <= 0) {
                    setTimerStopReturn(true)
                    clearInterval(interval);

                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;

    return (
        <>
            <div>{`${minute}:${second < 10 ? `0${second}` : second}`}</div>
            
        </>
    );
};

export default Timer;
