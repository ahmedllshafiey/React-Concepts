import type React from "react";

export function Click() {
    // Handling button click

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button clicked", event)
    }

    return (
        <button onClick={handleClick}>Click Me! and open console</button>
    )
}