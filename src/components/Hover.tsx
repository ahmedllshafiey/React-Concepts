import { useState } from "react";

export function Hover() {
    // Handling hovering event

    const[hovering, setHovering] = useState(false)

    const HandleMouseEnter = () => setHovering(true)
    const HandleMouseLeave = () => setHovering(false)

    return(
        <p
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeave}
            style={{
                width: "300px",
                height: "100px",
                backgroundColor: hovering ? "green" : "red",
                display: "flex",
                justifyContent: "center",   // horizontal
                alignItems: "center",       // vertical
                borderRadius: "8px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
            }}
            >
            {hovering ? "Hovering" : "Not Hovering"}
        </p>

    )
}