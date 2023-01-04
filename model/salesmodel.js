// importing the configuration database and sequrlize

import Sequelize from "sequelize";

import db from "../config/dbconfig.js";

// initiating a table to the database
const {DataTypes}=Sequelize;

// creating a table name and the header

const salemodel=db.define("saletrade",{
    productName:{
        type:DataTypes.STRING
    },
    productPrice:{
        type:DataTypes.DOUBLE
    }
},{
    freezeTableName:true
    
});

export default salemodel;