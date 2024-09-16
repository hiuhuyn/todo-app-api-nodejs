require('dotenv').config();
const mysql = require('mysql2');

// Tạo kết nối tới cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST, 
  port: process.env.DB_PORT ,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Kết nối đến cơ sở dữ liệu
connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối tới cơ sở dữ liệu:', err);
    return;
  }
  console.log('Kết nối tới cơ sở dữ liệu thành công!');
});

// Xuất đối tượng kết nối để sử dụng ở nơi khác
module.exports = connection;
