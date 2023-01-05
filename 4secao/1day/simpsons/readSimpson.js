// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const { readFile } = require('fs').promises;

const readSimpson = async () => {
  const reading = await readFile('./simpsons.json', 'utf-8'); // Lendo o arquivo simpsons.json
  const convertReading = JSON.parse(reading); // Converte o arquivo json para js
  const simpsonList = convertReading.map((item) => `${item.id} - ${item.name}`); // Faz um map nesse arquivo para exibir no formato desejado
  simpsonList.forEach((simpson) => console.log(simpson)); // Faz um forEach para imprimir no terminal fora do array
};

readSimpson();

module.exports = { readSimpson };
