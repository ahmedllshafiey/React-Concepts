import React, { useState } from "react";

export function Submit() {
    // Handling form submit

    const[formData, setFormData] = useState({name: ""})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: React. SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Form submitted: ", formData)
        console.log(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}