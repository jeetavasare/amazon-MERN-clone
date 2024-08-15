const express = require('express')
const path = require('path');
const app = express()

app.set("view engine", "ejs")

app.get("/",(req,res)=> {
    const filePath = path.join(__dirname, '../frontend/amazon.html');
    res.sendFile(filePath) //D:\Jeet\WebDev\amazon-react-clone\frontend\amazon.html
})
app.listen(3000)
