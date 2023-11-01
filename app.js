const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Defina um tempo limite (por exemplo, 30 segundos) para encerrar o servidor
const timeoutInMilliseconds = 30000;
setTimeout(() => {
  console.log('Encerrando o servidor após o tempo limite...');
  server.close(() => {
    console.log('Servidor encerrado.');
  });
}, timeoutInMilliseconds);

