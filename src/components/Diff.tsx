import { useState } from "react";

export function Diff() {
    const [items, setItems] = useState([
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
    ]);

    const handleAddItems = () => {
        setItems([...items, { id: items.length + 1, name: "New Item" }]);
    };

    return (
        <div>
            <button onClick={handleAddItems}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
