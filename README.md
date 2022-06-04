# Banco de dados orientado a documentos
 Curso Tera de banco de dados orientado a documentos - NoSql
_____

É um banco de dados voltado à documentos - arquivos em um formato específico.
Exemplo: um documento JSON que segue o modelo de chave/valor:
[
  {
    "quote": "She helped just enough so she could get what she wants. Food and a bed. She’s like a stray dog.",
    "author": "Lucas Sinclair"
  },
  {
    "quote": "I told you a million times my teeth are coming in. It’s called cleidocranial dysplasia.",
    "author": "Dustin Henderson"
  }
]

Por uma questão de compatilibidade com node e JS o JSON é mais usual.

Coleção: é a junção de vários documentos com estrutura semelhante.

Então aqui esqueça o conceito tradicional de banco de dados que existem colunas e linhas. Aqui existem documentos e coleções.

Exemplos de bancos de dados orientados à documentos:
- MongoDB;
- DynamoDB (é da Amazon);
- Cloud Firestore (é do google);
- CouchDB (é do Apache).

Foco aqui: MONGODB.

Instalação e documentação: https://www.mongodb.com/docs/manual/administration/install-community/

Iniciando MOngoDB via powershell (win):

PS C:\Program Files\MongoDB\Server\5.0\bin> .\mongo.exe

Mostra todos os bancos de dados:
show dbs

Criar BD:
use library

Criar coleção:
db.createCollection('book')

Inserir um dado (uma linha):
db.book.insert({"name": "O morro dos ventos uivantes", "author": "Emily Brunt", "ano_publicacao": 1970 })

Inserir vários dados (várias linhas):
Exemplo: db.book.insert([{},{},{},{},{},{}])
db.book.insert([{"name": "A mão esquerda da escuridão", "author": "Ursula Le Guin"},{"name": "Harry Potter - 45"}])

Consultar os dados:
Encontrando todos os livros: db.book.find()
Encontrando apenas um livro: db.book.find({"author": "Ursula Le Guin"})

Remover um registro:
db.book.remove({"name": "Harry Potter - 45"})

_____

// Inicializar MongoDB
mongo.exe

// Ajuda
db.help

// Listas todas as bases
show dbs

// Verificar base em uso
db

// Criar nova base ou selecionar base existente
use NOME_DA_BASE

// Limpar base
db.dropDatabase()

// Criar uma coleção
db.createCollection(name)

// Verificar coleções existentes
show collections

// Excluir coleção
db.NOME_COLECAO.drop()

// Inserir documento(s) na coleção
db.NOME_COLECAO.insert({})
db.NOME_COLECAO.insert([{}])

// Obter documentos de uma coleção
db.NOME_COLECAO.find()
db.NOME_COLECAO.find({})

// Atualizar um documento
db.NOME_COLECAO.update(SELECTION_CRITERIA, UPDATED_DATA)

// Salvar um documento (criar um novo ou atualizar um existente)
db.NOME_COLECAO.save({_id:ObjectId(),NEW_DATA})

// Excluir documento
db.NOME_COLECAO.remove(DELLETION_CRITTERIA)

_____

ODM e Mongoose

Mongoose é uma ferramenta do tipo ODM (Object Data Modeling) que serve para modelar dados.
Como o modelo de dados é uma deficiência do MongoDB, o Mongoose vem para suprir este problema.

Por exemplo, no Mongo podemos fazer o seguinte insert sem modelagem de dados:
db.book.insert([{"name": "A mão esquerda da escuridão", "author": "Ursula Le Guin"},{"name": "Harry Potter - 45"}])
No primeiro eu insiro o name e o autor. No segundo eu insiro apenas o nome. 
Viu? Este é o problema do Mongo, ele não gerencia a modelagem de dados.

O Mongoose é uma ótima ferramente para fazer esse ajuste e trabalhar em conjunto com o NodeJS.
Além disso o Mongoose permite a criação de coleções e documentos sem ter que ir para o prompt, nem o compass.

-> O Mongoose é a ferramenta que liga o desenvolvimento ao banco de dados.