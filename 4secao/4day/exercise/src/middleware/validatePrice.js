// Crie um middleware de validação para a chave price. Ela deve:
// Ser obrigatória;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo price é obrigatório" }.
// Ser um número maior ou igual a zero;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo price deve ser um número maior ou igual a zero" }.

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    res.status(400).send({ message: 'O campo price é obrigatório' });
  }
  if (price < 0) {
    res.status(400).send({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }
  next();
};

module.exports = {
  validatePrice,
};
