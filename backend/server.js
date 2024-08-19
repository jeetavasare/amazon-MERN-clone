import express from 'express';

import cors from "cors";
import router from "./routes/products.js";
import MongoDB from './db/mongoHelper.js';
const app = express()

let database = new MongoDB('mongodb://localhost:27017/Amazon-MERN')
await database.connectDB('mongodb://localhost:27017/Amazon-MERN')
let a = await database.find("Users")
console.log("dfdf",a)
app.use(cors({
    origin: 'http://localhost:5173'  // Replace with your frontend origin
}));



app.get("/",(req,res)=> {
    res.send("Lol")
})



app.use("/products",router)


app.listen(3000)
console.log("The server is listening on: http://localhost:3000")