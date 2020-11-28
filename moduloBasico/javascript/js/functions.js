//1° Exercício - exibir mensagem
const endereco = {
  rua: "Rua dos pinheiros",
  numero: "1293",
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};
function message(rua, numero, bairro, cidade, uf) {
  let msg =
    "O usuário mora em " +
    cidade +
    "/" +
    uf +
    ", no bairro " +
    bairro +
    ", na rua " +
    rua +
    " com o n° " +
    numero +
    ".";
  console.log(msg);
}
message(
  endereco.rua,
  endereco.numero,
  endereco.bairro,
  endereco.cidade,
  endereco.uf
);
//2° Exercício - Números pares entre dois números
function pairs(x, y) {
  const mod = (y - x) % 2;
  const modXY = (y % 2) + (x % 2);

  if (mod !== 1) {
    //Retorna quantidade de números pares de um intervalo
    lenghtPairs = modXY == 0 ? (y - x) / 2 - 1 : (y - x) / 2;
  } else {
    lenghtPairs = (y - x - 1) / 2;
  }

  for (i = x + 1; i < y; i++) {
    // Retorna os números pares de um intervalo
    let modX = i % 2;
    if (modX === 0) {
      console.log(i);
    }
  }

  console.log(lenghtPairs);
}
pairs(4, 8);
//3° Exercício - Verificar ocorrência de um elemento em um vetor
const skills = ["Javascript", "ReactJS", "React Native"];
function check(element) {
  let ctrl = false;
  for (i = 0; i <= skills.length; i++) {
    if (skills[i] === element) {
      ctrl = true;
      break;
    }
  }
  exist = ctrl === true ? true : false;
  console.log(exist);
}
check("Javascript");
// 4° Exercício - Retornar experiencia de acordo com tempo de estudo
function experience(time) {
  switch (time) {
    case 0:
    case 1:
      console.log("Iniciante");
      break;
    case 2:
    case 3:
      console.log("Intermediário");
      break;
    case 4:
    case 5:
    case 6:
      console.log("Avançado");
      break;
    case 7:
      console.log("Jedi Master");
      break;
    default:
      console.log("Jedi Master");
  }
}
experience(7);
// Trabalhando com vetores e objetos
let users = [
  {
    name: "Diogo",
    skills: ["Javascript", "ReactJS", "Redux"]
  },
  {
    name: "Gabriel",
    skills: ["VueJS", "Ruby on Railes", "Elixir"]
  }
];
function list(user) {
  // Retorna informções dos usuários
  for (let smash of user) {
    let name = smash.name;
    let skills = smash.skills.join(", ");
    console.log("O " + name + " possui as habilidades " + skills + ".");
  }
}
list(users);
