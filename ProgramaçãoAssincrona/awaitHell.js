/*
pegarId().then((id) =>{
    buscarEmailNoBanco(id).then((email)=>{

        enviarEmail("Olá, como vai?",email).then(()=>{
            console.log("Email enviado, para o usuário com id: " + id);
        }).catch(err =>{
            console.log(err);
        })

    })
})
*/

const pegarId = ()=>{
    return new Promise((resolve, reeject)=>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}

const buscarEmailNoBanco = (id)=>{
    return new Promise((resolve,reeject)=>{
        setTimeout(()=>{
            resolve("mateusgodoi@gmail.com")
        })
    },2000)
}

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

const principal = async ()=>{
    let id = await pegarId()
    let email = await buscarEmailNoBanco(id)
    await enviarEmail("Olá, como vai?", email)
    console.log("Email enviado");
    
}

principal()