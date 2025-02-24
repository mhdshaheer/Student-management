import express,{ Request,Response } from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import router from './routes/studentRoute';

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'Public')));
app.set("view engine","ejs");   
app.set("views",path.join(__dirname,"views"));

app.use('/',router)

app.listen(3004,()=>{
    console.log("server is running on port 3004")
})