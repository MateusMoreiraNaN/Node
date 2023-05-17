function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        // ........... logica
        
        let deuErro = false

        if(deuErro){
            callback(12, "O envio do e-mail falhou")
        }else{
            callback(12)
        }
        
    },8000)
}

console.log("Inicio do envio de e-mail");
//-------------------------
enviarEmail("Oi, seja bem vindo ao guia","mateusgodoi741@gmail.com", (erro, time)=>{
    if(erro == undefined){
        console.log("TUDO OK!!");
        console.log(`${time}s`);
    }else{
        console.log("Ocorreu um erro: " + erro);
        console.log(`${time}s`);
    }
})