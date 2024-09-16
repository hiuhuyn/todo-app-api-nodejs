const connection = require('../config/db');

// Tạo mới một mục Todo
exports.create = function(title, description, url, callback) {
  const query = 'INSERT INTO Todo (title, description, url, completed) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, description, url, false], (err, results) => {
    if (err) return callback(err);
    callback(null, results.insertId); // Trả về ID của mục mới tạo
  });
}

// Lấy tất cả các mục Todo
exports.getAll = function (callback) {
  const query = 'SELECT * FROM Todo';
  connection.query(query, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

// Lấy một mục Todo theo ID
exports.getById = function (id, callback) {
  const query = 'SELECT * FROM Todo WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
}

// Cập nhật một mục Todo
exports.update = function (id, title, description, url, completed, callback) {
  const query = 'UPDATE Todo SET title = ?, description = ?, url = ?, completed = ? WHERE id = ?';
  connection.query(query, [title, description, url, completed, id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

// Xóa một mục Todo
exports.delete = function (id, callback) {
  const query = 'DELETE FROM Todo WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}
