function enviarEmail(corpo, para){
    return new Promise((resolve, reeject)=>{
        setTimeout(()=>{

            let deuErro = true

            if(!deuErro){
                resolve() // Promessa ok
            }else{
                reeject() // foi mal, eu falhei :(
            }


        }, 4000)
    })
}

enviarEmail("Olá mundo","mateusgodoi@gmail.com").then(()=>{
    let a = 1 + 1  
    console.log("OPA, VOCÊ CONSEGUIU FAZER O QUE ME PROMETEU");
    console.log(a);
}).catch(()=>{
    console.log("QUE PENA, NÃO DEU CERTO :(");
})