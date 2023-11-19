const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path'); // path 모듈 추가

const app = express();
const port = 3000;

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '723546',
  database: 'reser',
});

connection.connect();
app.set('view engine', 'ejs');
// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 라우팅
app.get('/', (req, res) => {
  res.render('index');
});

// 기타 라우팅 및 서버 시작...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});