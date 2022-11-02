// Crie um middleware de validação para a chave rating. Ela deve:
// Ter um número inteiro entre 1 e 5;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo rating deve ser um número inteiro entre 1 e 5" }.

const validateRating = (req, res, next) => {
  const { description } = req.body;
  if (description.rating < 1 || description.rating > 5 || !Number.isInteger(description.rating)) {
    res.status(400).send({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

module.exports = {
  validateRating,
};
