import React from "react"

export function Event() {
    // Event handling 
    const handleClick = () => {
        alert("Button clicked")
    }

    const buttonJSx = <button onClick={handleClick}>Click Me New Boy</button>

    const buttonCreateElement = React.createElement(
        "button",
        {onClick: handleClick},
        "Click Me in legacy"
    )

    return (
        <div>
            {buttonJSx}
            {buttonCreateElement}
        </div>
    )
}