// Crie um middleware de autenticação ao endpoint POST com a rota /activities. Ela deve:
// Ser validada por meio do token que foi gerado ao realizar o signup;
// Ser encontrada pelo header Authorization;
// Ter exatamente 16 caracteres;
// Caso o token seja inválido ou inexistente, retornar o status 401 - Unauthorized e uma
// mensagem (formato json);
// Sugestão: { "message": "Token inválido!" }.

const validateAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) {
    res.status(401).json({ message: 'Token inválido!' });
  }
  next();
};

module.exports = { validateAuth };
