import React from "react"

export function Style() {
    // Inline styling in react

    const styledJSX = (
        <h3 style={{
            color: "orange",
            fontWeight: "bold",
            backgroundColor: "#432e54",
            padding: "20px"
        }}>
            JSX Styled
        </h3>
    )

    const styledCreateElement = React.createElement(
        "h3",
        {
            style: {
                color: "orange",
                fontWeight: "bold",
                backgroundColor: "#432e54",
                padding: "20px",
            }
        },"Styled in Legacy"
    )

    return(
        <>
            {styledJSX}
            {styledCreateElement}
        </>
    )
}