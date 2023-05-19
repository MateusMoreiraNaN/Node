const pegarUsuarios = ()=>{
    return new Promise((resolve, reeject)=>{
        setTimeout(()=>{
            resolve([
                {name: "Victor", lang:"JS"},
                {name: "Lima", lang: "C#"},
                {name: "Daniel", lang:"Java"}
            ])
        },3000)
    })
}

const principal = async ()=>{
    let usuarios = await pegarUsuarios()
    console.log(usuarios)
    console.log("OLÁ");
}

principal()