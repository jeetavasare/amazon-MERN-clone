import { Router } from "express";
import MongoDB from './db/mongoHelper.js';
const userRouter = Router()


let database = new MongoDB('mongodb://localhost:27017/Amazon-MERN')
await database.connectDB('mongodb://localhost:27017/Amazon-MERN')
let a = await database.find("Users")
console.log("dfdf",a)
userRouter.get("/",(req,res)=>{
    
})