import React from "react";

export function Legacy() {
    // Old style react component

    const elementJSX = <h3>Hi, JSX</h3> // JSX 

    const elementCreateElement = React.createElement("h3", null, "Hi, createElement") // (html_element, props, content)

    return(
        // JSX like a gate to Javascript code, to remove complexity for legacy element
        <div>
            {elementJSX}
            {elementCreateElement}
        </div>
    )
}