'use client'

import { useState } from 'react';

export default function Counter(props: { countBy?: number; backgroundColor: string }) {
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(props.countBy ? count + props.countBy : count + 1);

        if (count >= 10) {
            setCount(0);
        }
    }

    const buttonStyles = {
        border: "2px solid cyan",
        padding: "5px",
        cursor: "pointer",
        borderRadius: "10px",
        backgroundColor: props.backgroundColor
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement} style={buttonStyles}>
                Increment +{props.countBy ? props.countBy : 1}
            </button>
        </div>
    );
}