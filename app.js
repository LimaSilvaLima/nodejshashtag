import tabela2024 from "./tabela.js";
import express from 'express';
 
const app = express();

/* Endpoint to get the 2024 league table 
app.get('/tabela', (req, res) => {
  res.json(tabela2024);
});
*/

app.get('/', (req, res) => {
  res.send(tabela2024);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});