'use client'

import { redirect } from 'next/dist/server/api-utils';
import React, { useState } from 'react';

export default function Counter(props: { countBy: number; }) {
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(props.countBy ? count + props.countBy : count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement} style={{border: "2px solid cyan", padding: "5px"}}>
                Increment
            </button>
        </div>
    );
}