let http = require("http")


http.createServer(function(requisicao, resposta){
    resposta.end("<h1>bem vindo ao meu site</h1>")
}).listen(8181)

console.log("Meu servidor está rodando");