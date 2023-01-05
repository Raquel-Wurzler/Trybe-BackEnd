// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const fs = require('fs').promises;

const replacing = async () => {
  const readingSimp = await fs.readFile('./simpsonFamily.json', 'utf-8'); // Lendo o arquivo simpsons.json
  const convertingSimp = JSON.parse(readingSimp); // Converte o arquivo json para js
  const notNelson = convertingSimp.filter((item) => item.name !== 'Nelson Muntz'); // Retira o Nelson
  notNelson.push({id: 2, name: 'Marge Simpson'}); // Adiciona a Marge
  const convertFilteringSimp = JSON.stringify(notNelson); // Converte o arquivo js para json
  await fs.writeFile('./simpsonFamily.json', convertFilteringSimp); // Escreve no arquivo simpsonFamily.json 
  return console.log('successfully replacing Nelson for Marge in simpsonFamily'); // Console.log em mensagem de sucesso
}

replacing();

module.exports = { replacing };