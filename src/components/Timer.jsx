import React, { useState, useEffect, useContext, useRef } from 'react';
import {timerReturn} from "../context/timerReturn.js"

const Timer = (props) => {
    const [seconds, setSeconds] = useState(props?.time ? props.time : 10);
    const {timerStopReturn, setTimerStopReturn, submit } = useContext(timerReturn)
    const intervalRef = useRef(null)
    useEffect(() => {
        if(!submit){
            setSeconds(props?.time?props.time:10)
         intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds <= 0) {
                    setTimerStopReturn(true)
                    clearInterval(intervalRef.current);

                    return 0;
                }
                
                return prevSeconds - 1;
            });
            
        }, 1000);
    }
    else{
        clearInterval(intervalRef.current)
    }

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalRef.current);
    }, [submit, setTimerStopReturn]);

    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;

    return (
        <>
            <div>{`${minute}:${second < 10 ? `0${second}` : second}`}</div>
            
        </>
    );
};

export default Timer;
