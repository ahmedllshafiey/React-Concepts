import { useState } from "react";

export function Counter() {
    // Understanding virtual DOM updating

    const[counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h3>Counter: {counter}</h3>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}