function enviarEmail(corpo, para, callback){
    setTimeout(()=>{
        console.log(`
            Para: ${para}
            ---------------------------
            ${corpo}
            ---------------------------
            De: viceto Lima
        `)
        callback()
    },8000)
}

console.log("Inicio do envio de e-mail");
enviarEmail("Oi, seja bem vindo ao guia","mateusgodoi741@gmail.com", ()=>{
    console.log("Seu e-mail foi enviado, deve chegar em minutos")
    console.log("TUDO OK!!");
})
