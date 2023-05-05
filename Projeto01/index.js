const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get("/",(req, res)=>{
    let nome = 'Mateus Godoi'
    let lang = 'Java'
    //res.render("index.ejs")
    res.render("index")
})

app.listen(8080,()=>{
    console.log('App rodando');
})