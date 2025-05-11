const db = require('../db/db');

const Task = {
  getAll: (callback) => {
    db.all('SELECT * FROM tasks', [], callback);
  },
  getById: (id, callback) => {
    db.get('SELECT * FROM tasks WHERE id = ?', [id], callback);
  },
  create: (task, callback) => {
    const { title, description, dueDate, status, createdAt, updatedAt } = task;
    db.run(
      `INSERT INTO tasks (title, description, dueDate, status, createdAt, updatedAt)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, description, dueDate, status, createdAt, updatedAt],
      function (err) {
        callback(err, { id: this.lastID, ...task });
      }
    );
  },
  update: (id, task, callback) => {
    const { title, description, dueDate, status, updatedAt } = task;
    db.run(
      `UPDATE tasks SET title = ?, description = ?, dueDate = ?, status = ?, updatedAt = ?
       WHERE id = ?`,
      [title, description, dueDate, status, updatedAt, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
  },
  search: (keyword, callback) => {
    db.all(
      `SELECT * FROM tasks WHERE title LIKE ? OR description LIKE ?`,
      [`%${keyword}%`, `%${keyword}%`],
      callback
    );
  },
};

module.exports = Task;