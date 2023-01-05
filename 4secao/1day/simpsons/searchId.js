// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const { readFile } = require('fs').promises;

const searchId = async (id) => {
  const reading = await readFile('./simpsons.json', 'utf-8'); // Lendo o arquivo simpsons.json
  const convertReading = JSON.parse(reading); // Converte o arquivo json para js
  const idFound = convertReading.find(item => Number(item.id) === id); // Encontra o item que tem o mesmo id que está no parâmetro
  if (!idFound) { // Dispara um erro em caso de não ter um id compativel
    throw new Error('id não encontrado');
  }
  return console.log(`${idFound.id} - ${idFound.name}`); // Faz um console.log no retorno
}

searchId(8);

module.exports = { searchId };
