const express = require('express');
const app = express();
const todoRouter = require('./routes/todo.router');

// Middleware
app.use(express.json());

// Routes
app.use('/todos', todoRouter);

module.exports = app;
