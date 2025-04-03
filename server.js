const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Base de datos simulada
let celulares = [
  { id: 1, modelo: 'iPhone 13', marca: 'Apple', precio: 999 },
  { id: 2, modelo: 'Galaxy S23 Ultra', marca: 'Samsung', precio: 799 },
  { id: 3, modelo: 'Pixel 7 Pro', marca: 'Google', precio: 400 },
  { id: 3, modelo: 'Oneplus 12r', marca: 'Oneplus', precio: 200 },
];

// Obtener todos los celulares
app.get('/api/celulares', (req, res) => {
  res.json(celulares);
});

// Agregar un nuevo celular
app.post('/api/celulares', (req, res) => {
  const { modelo, marca, precio } = req.body;
  const nuevoCelular = {
    id: celulares.length + 1,
    modelo,
    marca,
    precio,
  };
  celulares.push(nuevoCelular);
  res.status(201).json(nuevoCelular);
});

// Eliminar un celular por ID
app.delete('/api/celulares/:id', (req, res) => {
  const id = parseInt(req.params.id);
  celulares = celulares.filter((celular) => celular.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});