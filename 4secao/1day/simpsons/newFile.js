// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4

const fs = require('fs').promises;

const newFile = async () => {
  const readingSimp = await fs.readFile('./simpsons.json', 'utf-8'); // Lendo o arquivo simpsons.json
  const convertingSimp = JSON.parse(readingSimp); // Converte o arquivo json para js
  const filteringSimp = convertingSimp.filter((item) => Number(item.id) <= 4); // Filtra tudo que tem o id menor que 5
  const convertFilteringSimp = JSON.stringify(filteringSimp); // Converte o arquivo js para json
  await fs.writeFile('./simpsonFamily.json', convertFilteringSimp); // Escreve no arquivo simpsonFamily.json 
  return console.log('successfully new file'); // Console.log em mensagem de sucesso
}

newFile();

module.exports = { newFile };
