import React, { useState } from "react";

export function Control() {
    // Controlled components (Form Input)

    const[inputValue, setInputValue] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const inputJSX = (
        <input type="text"  value={inputValue} onChange={handleChange} />
    )

    const inputCreateElement = React.createElement("input", {
        type: "text",
        value: inputValue,
        onChange: handleChange,
    })

    return (
        <>
            {inputJSX}
            {inputCreateElement}
            <p>Current Value: {inputValue}</p>
        </>
    )
}