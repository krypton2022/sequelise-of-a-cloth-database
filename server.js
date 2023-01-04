// import routers, express and the configuration database

import("./config/dbconfig.js");
import express from "express";
import routes from "./Routers/salesroute.js";


// creating a port and express application instance
const PORT=2020;
const app=express();

// creating a malware to use a jsonfile
app.use(express.json())

// malware to use the routes
app.use("/api/v1", routes);

// connecting to port
app.listen(PORT,()=>{
    console.log(`connecting to port ${PORT}`);
});