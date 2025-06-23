import React, {useEffect, useState} from "react";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    //delete todo function
    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id))
            // filter sets up a condition and only returns the todos that qulify
            // fiters out the todo with the id we r trying to delete
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message); 
        }
    }


    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <table class="table table-striped mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td>Edit</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                    </td>
                </tr>
            ))}
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
            </tbody>
        </table>
                
        </>
    );
};

export default ListTodos;
