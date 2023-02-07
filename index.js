const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("IT WORKED")
})

app.listen(process.env.PORT || 8000, ()=>{
    console.log("APP is listening to port 8000")
})
    

module.exports = app