const express = require('express');
const app = express(); //runs the express library
const cors = require('cors'); //allows us to make requests from the frontend to the backend
const pool = require("./db");

//middleware
app.use(cors()); //allows us to parse JSON data in the request body
app.use(express.json());

//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo


// we are listening to the server on port 5000
app.listen(5000, () => { 
    console.log('Server has started on port 5000'); 
});