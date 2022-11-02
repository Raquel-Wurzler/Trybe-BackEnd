// Crie um middleware de validação para a chave difficulty. Ela deve:
// Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
// Retornar o status 400 e uma mensagem em formato json;
// Sugestão: { "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" }.

const validateDifficulty = (req, res, next) => {
  const { description } = req.body;
  const options = ['Fácil', 'Médio', 'Difícil'];
  if (!options.some((option) => option === description.difficulty)) {
    res.status(400).send({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  next();
};

module.exports = {
  validateDifficulty,
};
