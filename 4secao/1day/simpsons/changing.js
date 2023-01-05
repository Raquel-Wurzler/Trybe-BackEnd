// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;

const changingSimpsons = async () => {
  const readingSimp = await fs.readFile('./simpsons.json', 'utf-8'); // Lendo o arquivo simpsons.json
  const convertingSimp = JSON.parse(readingSimp); // Converte o arquivo json para js
  const filteringSimp = convertingSimp.filter((item) => Number(item.id) !== 6 && Number(item.id) !== 10); // Filtra tudo que tem o is diferente de 3 e 10
  const convertFilteringSimp = JSON.stringify(filteringSimp); // Converte o arquivo js para json
  await fs.writeFile('./simpsons.json', convertFilteringSimp); // Escreve no arquivo simpsons.json 
  return console.log('successfully changed file'); // Console.log em mensagem de sucesso
}

changingSimpsons();

module.exports = { changingSimpsons };
