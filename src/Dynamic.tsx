import { useState } from "react";

export function Dynamic() {
    const [tasks, setTask] = useState([
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: false },
        { id: 3, text: "Task 3", completed: false },
        { id: 4, text: "Task 4", completed: false },
        { id: 5, text: "Task 5", completed: false },
        { id: 6, text: "Task 6", completed: false },
        { id: 7, text: "Task 7", completed: false },
    ]);

    const toggleCompletion = (id: number) => {
        setTask(tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    return (
        <ul>
            {tasks.map(task => (
                <li
                    key={task.id}
                    onClick={() => toggleCompletion(task.id)}
                    style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        cursor: "pointer"
                    }}
                >
                    {task.text}
                </li>
            ))}
        </ul>
    );
}
