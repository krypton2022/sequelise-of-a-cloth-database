// importing the sequelize module

import Sequelize from "sequelize";

// creating the database 
const db = new Sequelize("salesdb", "root", "root",{
    host:"localhost",
    dialect:"mysql"
});

// exporting the database
export default db;
