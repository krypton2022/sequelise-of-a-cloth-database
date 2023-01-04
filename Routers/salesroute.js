// import all models and logic
import express from "express";
import { allSales, deleteSale, newsale, singlesale, updateSale, } from "../controller/controller.js";
// import {sequelize} from "sequelize";


const routes=express.Router();

// endpoint for all
routes.get("/sales",allSales);

// endpoint to get a single sales
routes.get("/sales/:id", singlesale);

// endpoint to create a sales
routes.post("/sales", newsale);

// endpoint to update a sales
routes.patch("/sales/:id", updateSale);

// endpoint to delete a sales
routes.delete('/sales/:id',deleteSale);

// export
export default routes;