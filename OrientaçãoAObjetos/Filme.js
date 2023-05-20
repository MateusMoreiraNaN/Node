class Filme{
    constructor(){
        this.titulo = ''
        this.ano = 2000
        this.genero = ''
        this.diretor = ''
        this.atores = []
        this.direcao = 0
    }

    Reproduzir(){
        console.log("Reproduzindo....");
    }

    Pausar(){
        console.log("Pausado ||");
    }

    Avançar(){
        console.log("Avançar >>");
    }

    Fechar(){
        console.log("Fechar X");
    }
}