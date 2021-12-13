import React from "react";

const Buttons = ({watchOn,handleReset,handleStart,waitButton,handleResetAndStart}) => {
    return (
        <div className={'btnGroup'}>
            {
                watchOn ? (
                <button className={'btn'} onClick={ handleReset}>Stop</button>
                ) : (
                    <button className={'btn'} onClick={ handleStart}>Start</button>
                )
            }
            <button className={'btn'} onClick={handleResetAndStart}>reset</button>
            <button className={'btn'} ref={waitButton}>wait</button>
        </div>
    )
}
export default Buttons