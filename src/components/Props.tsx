import React from "react";

export function Props() {
    // Passing props

    const buttonJSX = <button className="prop-btn">Click Me JSX</button> // JSX button

    const buttonCreatedElement = React.createElement(
        "button",
        {className: "prop-btn"},
        "Click Me Legacy"
    ) // Classic button

    return (
        <div>
            {buttonJSX}
            {buttonCreatedElement}
        </div>
    )
}