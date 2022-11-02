// Crie um middleware de validação para a chave createdAt. Ela deve:
// Ter uma data válida no formato dd/mm/aaaa;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" }.

const validateCreatedAt = (req, res, next) => {
  const { description } = req.body;
  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i;
  if (!description.createdAt.match(regex)) {
    res.status(400).send({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  next();
};

module.exports = {
  validateCreatedAt,
};
