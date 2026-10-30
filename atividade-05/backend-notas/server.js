const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, 'data.json');

// Middlewares para aceitar JSON e permitir requisicoes de outros dominios (CORS)
app.use(bodyParser.json());
app.use(cors());

// Funcoes auxiliares para ler e salvar no arquivo JSON
function readData() {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
}

function writeData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

// Rota raiz informativa (Health Check)
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    servico: 'API REST CRUD de Notas - Aula 05',
    endpoints: [
      'GET /api/notes',
      'GET /api/notes/:id',
      'POST /api/notes',
      'PUT /api/notes/:id',
      'DELETE /api/notes/:id'
    ]
  });
});

// 1. GET /api/notes - Retorna todas as notas
app.get('/api/notes', (req, res) => {
  const notes = readData();
  res.json(notes);
});

// 2. GET /api/notes/:id - Retorna uma nota especifica por ID
app.get('/api/notes/:id', (req, res) => {
  const notes = readData();
  const note = notes.find((n) => n.id === req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ erro: 'Nota não encontrada' });
  }
});

// 3. POST /api/notes - Cria uma nova nota
app.post('/api/notes', (req, res) => {
  const notes = readData();

  if (!req.body.titulo || !req.body.texto) {
    return res.status(400).json({ erro: 'Os campos titulo e texto são obrigatórios' });
  }

  const newNote = {
    id: Date.now().toString(),
    titulo: req.body.titulo,
    texto: req.body.texto,
    criadoEm: new Date().toISOString()
  };

  notes.push(newNote);
  writeData(notes);

  res.status(201).json(newNote);
});

// 4. PUT /api/notes/:id - Atualiza uma nota existente
app.put('/api/notes/:id', (req, res) => {
  const notes = readData();
  const index = notes.findIndex((n) => n.id === req.params.id);

  if (index !== -1) {
    notes[index].titulo = req.body.titulo;
    notes[index].texto = req.body.texto;
    writeData(notes);
    res.json(notes[index]);
  } else {
    res.status(404).json({ erro: 'Nota não encontrada' });
  }
});

// 5. DELETE /api/notes/:id - Exclui uma nota existente
app.delete('/api/notes/:id', (req, res) => {
  let notes = readData();
  const exists = notes.some((n) => n.id === req.params.id);

  if (!exists) {
    return res.status(404).json({ erro: 'Nota não encontrada' });
  }

  notes = notes.filter((n) => n.id !== req.params.id);
  writeData(notes);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
