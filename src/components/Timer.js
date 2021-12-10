import React from "react";
const Timer = ({time}) => {

    const addZero = (time) => {
        return time < 10 ? `0${time}` : `${time}`
    }

    const seconds = addZero(Math.floor(time  % 60)).slice(-2)
    const minutes = addZero(Math.floor(time / 60) % 60).slice(-2)
    const hours = addZero(Math.floor((time /  3600) % 24)).slice(-2)

    return (
        <div className={'displayBlock'}>
            <span className={'display'}>{hours}</span>&nbsp;:&nbsp;
            <span className={'display'}>{minutes}</span>&nbsp;:&nbsp;
            <span className={'display'}>{seconds}</span>
        </div>
    )
}
export default Timer