import express from 'express';
import config from './utils/configManager.js';
import cors from "cors";
import productRouter from "./routes/products.js";

const app = express()


app.use(cors({
    origin: 'http://localhost:5173'  // Replace with your frontend origin
}));
console.log(config)


app.get("/",(req,res)=> {
    res.send("Lol")
})



app.use("/products",productRouter)


app.listen(3000)
console.log("The server is listening on: http://localhost:3000")