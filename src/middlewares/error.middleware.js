// Função de logging
const errorLogger = (error, request, response, next) => {
    console.error(error.message, error.stack);
    next(error); // chama o próximo middleware
  };
  
  // Função de leitura do erro e envio da responsa em json
  const errorResponder = (error, request, response, next) => {
    const status = error.statusCode || 500;
    response.status(status).json({ message: error.message });
  };
  
  module.exports = {
    errorLogger,
    errorResponder,
  };
  