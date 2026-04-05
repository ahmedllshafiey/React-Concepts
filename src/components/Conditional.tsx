import React from "react";

export function Conditional(){

    const isLoggedIn: boolean = false;

    const greetingJSX = (
        <div>{isLoggedIn ? <h3>Welcome logged person</h3> : <h3>Please login first</h3>}</div>
    )
        
    const greetingCreateElement = React.createElement(
        "div",
        null,
        isLoggedIn ? React.createElement("h3", null, "Welcome logged person") : React.createElement("h3", null, "Please login first")
    )

    return (
        <div>
            {greetingJSX}
            {greetingCreateElement}
        </div>
    )
} 