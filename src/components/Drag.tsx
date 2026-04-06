import React, { useState } from "react";

export function Drag() {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
        console.log("Item dropped");
    };

    const handleDragEnter = () => setDragging(true);
    const handleDragLeave = () => setDragging(false);

    return (
        <div className="section">
            <h3>Drag & Drop</h3>

            {/* Draggable item */}
            <div
                draggable
                style={{
                    width: "120px",
                    padding: "10px",
                    backgroundColor: "#4da3ff",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "6px",
                    marginBottom: "15px",
                    cursor: "grab"
                }}
            >
                Drag me
            </div>

            {/* Drop zone */}
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                className="drag-box"
                style={{
                    width: "300px",
                    height: "150px",
                    border: "2px dashed #4da3ff",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: dragging ? "#2f7edb" : "#252526",
                    transition: "0.2s",
                }}
            >
                {dragging ? "Release to drop" : "Drop here"}
            </div>
        </div>
    );
}
