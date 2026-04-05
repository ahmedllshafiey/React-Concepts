import React from "react"

export function Nested() {
    // Nested Elements

    const nestedJSX = (
        <div>
            <h3>This is a nested JSX</h3>
        </div>
    )

    const nestedCreatedElement = React.createElement(
        "div",
        null,
        React.createElement("h3", null, "This is a nested legacy element")
    )

    return (
        <div>
            {nestedJSX}
            {nestedCreatedElement}
        </div>
    )
}