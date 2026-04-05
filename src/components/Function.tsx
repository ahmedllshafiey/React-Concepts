import React from "react";

const GreetingJSX = () => <h3>Hello functional component</h3>
    // Component name must be in PascalCase not camelCase

const GreetingCreateElement = () => {
    return React.createElement(
        "h3",
        null,
        "Hello legacy functional component"
    )
}

export function Function() {
    // Functional component

    return(
        <div>
            <GreetingJSX />
            {React.createElement(GreetingCreateElement)}
        </div>
    )
}