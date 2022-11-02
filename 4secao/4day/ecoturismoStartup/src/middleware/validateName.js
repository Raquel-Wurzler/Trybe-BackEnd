// Crie um middleware de validação para a chave name. Ela deve:
// * Ser obrigatória;
// * Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo name é obrigatório" }.
// * Ter mais de 4 caracteres;
// * Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo name deve ter pelo menos 4 caracteres" }.

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send({ message: 'O campo name é obrigatório' });
  }
  if (name.length < 4) {
    res.status(400).send({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
  next();
};

module.exports = {
  validateName,
};
