import express, { json } from "express"
import mongoose from "mongoose";
import dotenv  from "dotenv"
import appRoutes from "./appRoutes.js";
import bodyParser from "body-parser";
dotenv.config()

const app= express();

app.use(express.json());
// app.use(express.urlencoded());
// app.use(bodyParser)
// app.use(express.);

app.use(appRoutes)
const MONGO_URL=process.env.MONGO_URL ||"mongodb://localhost:27017/booking";

// console.log(MONGO_URL);


mongoose.connect(MONGO_URL).then(()=>console.log("database connect")).catch((error)=>console.log("error in connection",error))
    
const PORT= process.env.PORT||4000


app.listen(PORT,()=>{
console.log("server is listing on 4000")
})