// * SEU CÓDIGO *

const timeout = (ms)=>{
    console.log('timeout')
    return new Promise(resolve => setTimeout(resolve, ms))
}

const {API_HOST} = process.env // pega variavel de ambiente API_HOST

class Teste {
    name =''

    constructor(name='teste'){
        this.name = name
    }

    sleep = async (fn, ...args) =>{
        await timeout(1000);
        fn(...args);
        document.write(this.name)
    }
}

const teste = new Teste(API_HOST);
teste.sleep(console.log, teste.name)