import React, {useState} from "react";

const InputTodo = () => {

    // State to hold the input description 
    // setDescription is used to update description when user types input
    const [description, setDescription] = useState("");
    // Allows the component to keep track of what the user types 
    // and reactively update the UI when the value changes


    const onSubmitForm = async e => {
        e.preventDefault();
        try {
        const body = { description };
        const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        window.location = "/";
        } catch (err) {
        console.error(err.message);
        }
    };


    return (
        <>
            <h1 className="text-center mt-5">PERN Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </>
    );
};

export default InputTodo;