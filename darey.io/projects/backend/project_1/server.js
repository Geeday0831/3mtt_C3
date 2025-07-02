const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());
const file = './data/users.json';

// Utility functions
const getUsers = () => {
  try {
    if (!fs.existsSync(file)) return [];
    return JSON.parse(fs.readFileSync(file));
  } catch (err) {
    return [];
  }
};
const saveUsers = (data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// Routes
app.get('/users', (req, res) => {
  res.json(getUsers());
});

app.post('/users', (req, res) => {
  const users = getUsers();
  const newUser = { id: uuidv4(), ...req.body };
  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
  const user = getUsers().find(u => u.id === req.params.id);
  user ? res.json(user) : res.status(404).json({ message: 'Not found' });
});

app.put('/users/:id', (req, res) => {
  const users = getUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  // Prevent id overwrite
  users[index] = { ...users[index], ...req.body, id: users[index].id };
  saveUsers(users);
  res.json(users[index]);
});

app.delete('/users/:id', (req, res) => {
  const users = getUsers();
  const userExists = users.some(u => u.id === req.params.id);
  if (!userExists) return res.status(404).json({ message: 'Not found' });
  const filtered = users.filter(u => u.id !== req.params.id);
  saveUsers(filtered);
  res.status(204).send();
});

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
