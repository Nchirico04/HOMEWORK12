// Bring in needed Libraries
const inquirer = require("inquirer");
const  mysql = require("mysql2");


// setup our connection to mySQL Database
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "Employees"
})

connection.connect(function(error){
    if(error) {
        console.log(error);
        throw error;
    }
    console.log("Connected to Database");
}) 

// to query our database 
connection.query("SELECT * FROM Department", function(error, data) {
    if(error) {
        console.log(error);
        throw error;
    }

    console.log(data);
})


// start with Inquirer (how do you want to communicate with the USER)