const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//Set up Handlebars view engine
app.engine('handlebars', exphbs({
  defaultLayout: null
}));
app.set('view engine', 'handlebars');

// Tạo route cho trang chủ
app.get('/', (req, res) => {
  // Truyền dữ liệu vào mẫu
  res.render('home', { name: 'John Doe' });
});

// Khởi động server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
