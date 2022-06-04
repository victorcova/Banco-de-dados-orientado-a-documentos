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

