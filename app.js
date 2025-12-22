import tabela2024 from "./tabela.js";
import express from 'express';
 
const app = express();

/* Endpoint to get the 2024 league table 
app.get('/tabela', (req, res) => {
  res.json(tabela2024);                                                                                                                                                                    
});
*/

app.get('/', (req, res) => {
  res.status().send(tabela2024);
});

app.get('/:sigla', (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase();
  const time = tabela2024.find((infoTime) => infoTime.sigla === siglaInformada);
  if (!time) {
    return res.status(404).send('Time não encontrado');
  }
  res.send(time);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});