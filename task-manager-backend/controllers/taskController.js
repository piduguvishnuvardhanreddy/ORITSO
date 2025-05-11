const Task = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  Task.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getTask = (req, res) => {
  const { id } = req.params;
  Task.getById(id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: 'Task not found' });
    res.json(row);
  });
};

exports.createTask = (req, res) => {
  const task = {
    ...req.body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (!task.title || !task.status) {
    return res.status(400).json({ message: 'Title and status are required' });
  }

  Task.create(task, (err, newTask) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newTask);
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const task = {
    ...req.body,
    updatedAt: new Date().toISOString(),
  };

  Task.update(id, task, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, ...task });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Task.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task deleted' });
  });
};

exports.searchTasks = (req, res) => {
  const { keyword } = req.query;
  Task.search(keyword, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};
