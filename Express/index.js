const express = require("express") // importando o express 
const app = express() // iniciando o express

app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao guia do programador</h1>")
})

app.get("/blog/:artigo?", function(req, res){
    let artigo = req.params.artigo

    if(artigo){
        res.send(`<h1>Artigo: ${artigo}</h1>`)
    }else{
        res.send("<h1>Bem vindo ao meu blog</h1>|<h2>www.guiadoprogramador.com</h2>")
    }

    
})

app.get("/canal", (req, res)=>{
    let canal = req.query["canal"]
    
    if(canal){
        res.send(`<h1>${canal}</h1>`)
    }else{
        res.send("Nenhum canal fornecido")
    }

})

app.get("/canal/youtube", (req, res)=>{
    res.send("Bem vindo ao meu canal")
})

app.get("/ola/:nome/:empresa", (req, res)=>{
    // REQ => dados enviados peelo usuario
    // RES => a resposta
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`<h1>Oi ${nome} do ${empresa}</h1>`)
})



app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})


