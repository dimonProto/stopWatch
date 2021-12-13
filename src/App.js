import './App.css';
import {buffer, debounceTime, filter, fromEvent, interval, map, Subject, takeUntil} from "rxjs";
import {useEffect, useRef, useState} from "react";
import Buttons from "./components/Buttons";
import Timer from "./components/Timer";

function App() {
    const [time, setTime] = useState(0);
    const [watchOn, setWatchOn] = useState(false);

    const waitButton = useRef()
    useEffect(() => {

        const unsubscribe = new Subject();
        interval(1000)
            .pipe(takeUntil(unsubscribe))
            .subscribe(() => {
                if (watchOn) {
                    setTime(val => val + 1);
                }
            });
        return () => {
            unsubscribe.next();
            unsubscribe.complete();
        };
    }, [watchOn]);

    useEffect(() => {

        if(!waitButton || !waitButton.current) return
        const click$ = fromEvent(waitButton.current, 'click');

        const doubleClick$ = click$
            .pipe(
                buffer(click$.pipe(debounceTime(300))),
                map(clicks => clicks.length),
                filter(clicksLength => clicksLength >= 2)
            );

        doubleClick$.subscribe(_ => {
            setWatchOn(false);
        });
    },[waitButton])

    const handleStart = () => {
        setWatchOn(prevState => !prevState);
    }

    const handleReset = () => {
        setTime(0);
        setWatchOn(false);
    }
    const handleResetAndStart = () => {
        setTime(0);
        setWatchOn(false);
        setWatchOn(true);
    }

    return (
        <div className={'App'}>
            <Timer time={time}/>
            <Buttons
                watchOn={watchOn}
                handleReset={handleReset}
                handleStart={handleStart}
                handleResetAndStart={handleResetAndStart}
                waitButton={waitButton}
            />
        </div>
  );
}

export default App;
