import React from 'react'

export function List() {
    // Example of lists

    const fruits = ["Apple", "Banana", "Orange"]
    const vegetables = ["Carrot", "Onion", "Spinach"]

    const listJSX = (
        <ul>
            <h3>
                <h3>Fruits</h3>
                {fruits.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </h3>
        </ul>
    )

    const listCreateElement = React.createElement("ul", null, React.createElement("h3", null, "Vegetables"),React.createElement("h3", null, vegetables.map((item, index)=> (
        React.createElement("li", {key:index}, item)
    ))))

    return (
        <div>
            {listJSX }
            {listCreateElement}
        </div>
    )
}