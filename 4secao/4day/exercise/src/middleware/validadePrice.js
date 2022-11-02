// Crie um middleware de validação para a chave price. Ela deve:
// Ser obrigatória;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo price é obrigatório" }.
// Ser um número maior ou igual a zero;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo price deve ser um número maior ou igual a zero" }.

const mandatoryPrice = (req, res, next) => {
  const requiredProperties = ['price'];
  const hasProperties = requiredProperties.every((prop) => prop in req.body);
  if (!hasProperties) {
    res.status(400).send({ message: 'O campo price é obrigatório' });
  }
  next();
};

const valuePrice = (req, res, next) => {
  const { price } = req.body;
  if (price >= 0) {
    next();
  } else {
    res.status(400).send({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }
};

module.exports = {
  mandatoryPrice,
  valuePrice,
};
