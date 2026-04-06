// Reconciliation: change the real DOM when change from virtual DOM

import { useState } from "react";

export function Recon() {
    // Understanding Reconciliation

    const[toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <button onClick={handleToggle}>Toggle View</button>
            {toggle ? (
                <p className="box" style={{backgroundColor:"green"}}>Component A</p>
            ): (
                <p className="box" style={{backgroundColor:"red"}}>Component B</p>
            )}
        </>
    )
}