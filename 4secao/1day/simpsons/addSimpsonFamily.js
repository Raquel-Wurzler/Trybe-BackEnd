// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises;

const addSimpsonFamily = async () => {
  const readingSimp = await fs.readFile('./simpsonFamily.json', 'utf-8'); // Lendo o arquivo simpsons.json
  const convertingSimp = JSON.parse(readingSimp); // Converte o arquivo json para js
  convertingSimp.push({id: 8,name: 'Nelson Muntz'}); // Adiciona no array o Nelson
  const convertFilteringSimp = JSON.stringify(convertingSimp); // Converte o arquivo js para json
  await fs.writeFile('./simpsonFamily.json', convertFilteringSimp); // Escreve no arquivo simpsonFamily.json o novo array
  return console.log('successfully add in simpsonFamily'); // Console.log em mensagem de sucesso
}

addSimpsonFamily();

module.exports = { addSimpsonFamily };