function enviarEmail(corpo, para){
    return new Promise((resolve, reeject)=>{
        setTimeout(()=>{

            let deuErro = false

            if(!deuErro){
                resolve({time: 6, to: 'mateusgodoi54.com'}) // Promessa ok
            }else{
                reeject("Fila cheia") // foi mal, eu falhei :(
            }


        }, 4000)
    })
}

enviarEmail("Olá mundo","mateusgodoi@gmail.com").then(({time,to})=>{
    let a = 1 + 1  
    console.log(`
        Time: ${time}
        ------------------
        To: ${to}
    
    `);
    console.log("OPA, VOCÊ CONSEGUIU FAZER O QUE ME PROMETEU");
    console.log(a);
}).catch((erro)=>{
    console.log("QUE PENA, NÃO DEU CERTO :(" + erro);
})