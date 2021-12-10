import React from "react";

const Buttons = ({watchOn,handleReset,handleStart,waitButton}) => {
    return (
        <div className={'btnGroup'}>
            {
                watchOn ? (
                <button className={'btn'} onClick={ handleReset}>Stop</button>
                ) : (
                    <button className={'btn'} onClick={ handleStart}>Start</button>
                )
            }
            <button className={'btn'} onClick={handleReset}>reset</button>
            <button className={'btn'} ref={waitButton}>wait</button>
        </div>
    )
}
export default Buttons