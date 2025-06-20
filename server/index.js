const express = require('express');
const app = express(); //runs the express library
const cors = require('cors'); //allows us to make requests from the frontend to the backend
const pool = require("./db");

//middleware
app.use(cors());           // Allows cross-origin requests
app.use(express.json());   // Parses JSON bodies //req.body

//ROUTES//

//create a todo
app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        );
        // RETURNING * is used when inserting/updating/deleting data - to return back the data

        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
})

//get all todos

//get a todo

//update a todo

//delete a todo


// we are listening to the server on port 5000
app.listen(5000, () => { 
    console.log('Server has started on port 5000'); 
});