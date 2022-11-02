// Crie um middleware de validação para a chave name. Ela deve:
// * Ser obrigatória;
// * Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo name é obrigatório" }.
// * Ter mais de 4 caracteres;
// * Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo name deve ter pelo menos 4 caracteres" }.

const mandatoryName = (req, res, next) => {
  const requiredProperties = ['name'];
  const hasProperties = requiredProperties.every((prop) => prop in req.body);
  if (!hasProperties) {
    res.status(400).send({ message: 'O campo name é obrigatório' });
  }
  next();
};

const nameSize = (req, res, next) => {
  const { name } = req.body;
  if (name.length >= 4) {
    next();
  } else {
    res.status(400).send({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
};

module.exports = {
  mandatoryName,
  nameSize,
};
