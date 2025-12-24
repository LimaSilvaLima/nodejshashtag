import tabela2024 from "./tabela.js";
import express from 'express';
 
const app = express();

app.use(express.json());

/* Endpoint to get the 2024 league table 
app.get('/tabela', (req, res) => {
  res.json(tabela2024);                                                                                                                                                                    
});*/


app.get('/', (req, res) => {
  res.status(200).send(tabela2024);
});

app.get('/:sigla', (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase();
  const time = tabela2024.find((infoTime) => infoTime.sigla === siglaInformada);
  if (!time) {
    return res.status(404).send('Time não encontrado');
  }
  res.send(time);
});

app.put('/:sigla', (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase();
  const timeSelecionado = tabela2024.find((time) => time.sigla === siglaInformada);
  if (!timeSelecionado) {
    return res.status(404).send('Time não encontrado');
  }
  const campos = Object.keys(req.body);
  for (let campo of campos) {
    timeSelecionado[campo] = req.body[campo]; 
  }
  res.status(200).send(timeSelecionado);
});

app.post('/', (req, res) => {
  const novoTime = req.body;
  tabela2024.push(novoTime); 
  res.status(201).send(novoTime);
});

app.delete('/:sigla', (req, res) => {
  const siglaInformada = req.params.sigla.toUpperCase();
  //const timeSelecionado = tabela2024.find((time) => time.sigla === siglaInformada);
  const indiceTimeSelecionado = tabela2024.findIndex((time) => time.sigla === siglaInformada);
  if (indiceTimeSelecionado === -1) {
    return res.status(404).send('Time não encontrado');
  }
  const timeRemovido = tabela2024.splice(indiceTimeSelecionado, 1);
  res.status(200).send(timeRemovido);
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
    
});