
import express from "express";
import userRoutes from "./src/adminManagment/userManagment/userregisteration/userRoutes.js";


const appRoutes =express.Router();


appRoutes.use("/api/v1",userRoutes)




export default appRoutes;