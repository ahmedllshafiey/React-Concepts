import React from 'react'

export function Fragment() {
    // Using fragments

    const fragmentJSX = (
        <> 
            <h3>Title: JSX</h3>
            <p>Ths is a JSX fragment</p>
        </>
    )

    // Fragment in JSX: <></>
    // Fragment in Legacy: React.Fragment

    const fragmentCreatedElement = React.createElement(
        React.Fragment,
        null,
        React.createElement("h3", null, "Title: Legacy"),
        React.createElement("h3", null, "This is a legacy paragraph"),
    )

    return (
        <>
            {fragmentJSX}
            {fragmentCreatedElement}
        </>
    )
}