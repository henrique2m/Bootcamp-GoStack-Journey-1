//Requerindo a dependência express
const express = require("express");
//Instânciando o servidor
const server = express();
//Validando json
server.use(express.json());

//Query params = ?teste='
//Route params = /users/1
//Request body  = {"name": "Henrique", "email":"btdavintehenrique@gmail.com"}

//Vetor de usuários
const users = ["Henrique", "Diego", "Victor"];

//CRUD - Create, Read, Update, Delete

//Middlewares Global
server.use((req, res, next) => {
  console.time("Request"); // Início da requisição
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd("Request"); // Termino da requisição
});

//Middlewares Local
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    //verificar se name existe
    return res.status(400).json({ error: "User name is required" });
  }
  return next(); //Encerra a requisição
}

//Middlewares Local
function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    //verificar se o usuário existe
    return res.status(400).json({ error: "User does not exits" });
  }
  req.user = user;
  return next(); //Encerra a requisição
}

//Método) GET - Faz uma requisição ao servidor
server.get("/users/:index", checkUserInArray, (req, res) => {
  // retornando string : return res.send("Hello Word");

  // Capturando dados pelo método query
  // const nome = req.query.nome;

  // Capturando dados pelo método params
  // const id = req.params.id;

  // Desestruturação ES6
  // const { id } = req.params;

  const { index } = req.params;

  // retornando objeto javascript(JSON)
  // return res.json({ message: `buscando usuário ${id}` });
  return res.json(users[index]);
});

//Retornar todos os usuários
server.get("/users", (req, res) => {
  return res.json(users);
});

//Método POST - Inserção de dados
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

//Método PUT - Alteração de dados
server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

//Método DElETE - deletar dados
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});
// Rodando o servidor na porta 3000
server.listen(3000);
