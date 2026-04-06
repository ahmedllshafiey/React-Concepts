import { useState } from "react";

export function Render() {
    // Conditional Rendering

    const[showText, setShowText] = useState(true)

    const toggleText = () => {
        setShowText(!showText)
    }

    return (
        <>
            {showText && (
                <p>This text content can be toggled</p>
            )}
            <button onClick={toggleText}>Toggle Text</button>
        </>
    )
}