// Entry point of the Express.js API

const express = require('express');
const itemsRouter = require('./routes/items');
const notFound = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/items', itemsRouter);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
