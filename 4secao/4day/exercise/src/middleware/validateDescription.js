// Crie um middleware de validação para a chave description que possui as chaves
// createdAt, rating e difficulty. Ela deve:
// Ter todas as chaves obrigatórias;
// Retornar o status 400 para todas e uma mensagem em formato json;
// Sugestão: { "message": "O campo description é obrigatório" };
// Sugestão: { "message": "O campo createdAt é obrigatório" };
// Sugestão: { "message": "O campo rating é obrigatório" };
// Sugestão: { "message": "O campo difficulty é obrigatório" }.

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    res.status(400).send({ message: 'O campo description é obrigatório' });
  }
  if (!description.createdAt) {
    res.status(400).send({ message: 'O campo createdAt é obrigatório' });
  }
  if (!description.rating) {
    res.status(400).send({ message: 'O campo rating é obrigatório' });
  }
  if (!description.difficulty) {
    res.status(400).send({ message: 'O campo difficulty é obrigatório' });
  }
  next();
};

module.exports = {
  validateDescription,
};
