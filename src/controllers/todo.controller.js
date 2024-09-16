const Todo = require('../models/todo.model');

exports.create = (req, res) => {
  const { title, description, url } = req.body;
  Todo.create(title, description, url, (err, insertId) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Todo created', todoId: insertId });
  });
}

exports.getAll = (req, res) => {
  Todo.getAll((err, todos) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(todos);
  });
}

exports.getById = (req, res) => {
  const id  = req.query.id;
  Todo.getById(id, (err, todo) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json(todo);
  });
}

exports.update = (req, res) => {
  const id = req.query.id;
  const {title, description, url, completed } = req.body;
  Todo.update(id, title, description, url, completed, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Todo updated' });
  });
}

exports.delete = (req, res) => {
  const id = req.query.id;
  Todo.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Todo deleted' });
  });
}
