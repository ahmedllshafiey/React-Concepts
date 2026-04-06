import { useState } from "react";

export function Complex(){
    // Updating complex state

    const[users, setUsers] = useState([
        {id: 1, name:"Ahmed"},
        {id: 1, name:"Omar"},
    ])

    const handleAddUser = () => {
        setUsers([
            ...users,
            {id: users.length + 1, name: `User ${users.length + 1}`}
        ])
    }

    return (
        <>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={handleAddUser}>Add User</button>
        </>
    )
}