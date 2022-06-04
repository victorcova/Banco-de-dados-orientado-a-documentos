const mongoose = require('mongoose'); // importo o mongoose
const book = require('./book');
const server = '127.0.0.1:27017'; // endereço do servidor
const database = 'library'; // nome da base de dados

// Fazendo a Conexão:
class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log('Conexao com o banco de dados realizada com sucesso')
        })
        .catch(err => {
            console.error('Erro na conexao com o banco de dados')
        })
    }
}

module.exports = new Database();

const bookModel = require('./book'); // modelo do book

/*

// Usando o modelo para inserir no banco:
const book1 = new bookModel({
    author: "Ursula Le Guin",
    name: "Os Despossuídos", // como o modelo não tem "name" ele não será inserido!
    year: 1995,
})

// Salvando o livro:
book1.save()
    .then(doc => {
        console.log('OK', doc);
    })
    .catch(error => {
        console.log('Not OK', error);
    })

*/    

// update do Livro
//  pegar o ID do insert anterior. Exemplo: _id: new ObjectId("629bdcbaada4cd754e4b3132")

bookModel.findByIdAndUpdate(
    {
        _id: '629bdcbaada4cd754e4b3132' // critério de busca
    },
    {
        title: "Os Despossuídos" // as propriedades que eu quero alterar
    }
)
    .then(doc => { //retornos
        console.log('OK', doc);
    }) 
    .catch (error => {
        console.log('ERROR', error);
    })

