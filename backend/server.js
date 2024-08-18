const express = require('express')
const path = require('path');
const cors = require("cors");
const app = express()


app.use(cors({
    origin: 'http://localhost:5173'  // Replace with your frontend origin
}));


app.get("/",(req,res)=> {
    res.send("Lol")
})

const router = require("./routes/products")

app.use("/products",router)


app.listen(3000)
console.log("The server is listening on: http://localhost:3000")