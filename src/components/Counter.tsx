import React, {useState} from 'react';
import s from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={s.wrapper}>
            <h1>{counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+</button>
        </div>
    );
};

