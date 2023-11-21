const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path'); // path 모듈 추가

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '723546',
  database: 'iptex', // iptex 데이터베이스
  port: 3307,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    phone VARCHAR(20) NOT NULL
  );
`;

// 테이블 생성 함수
function createTable() {
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('테이블 생성 오류:', err);
    } else {
      console.log('user 테이블 생성 완료');
    }
  });
}

// 서버 시작 시 테이블 생성
connection.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 오류:', err);
  } else {
    console.log('데이터베이스 연결 성공');

    // user 테이블 생성
    createTable();
  }
});


app.set('view engine', 'ejs');
// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'public/js'), { 'Content-Type': 'application/javascript' }));
app.set('views', path.join(__dirname, 'views'))
// 라우팅
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login'); // login.ejs 파일을 렌더링
});

app.get('/signup', (req, res) => {
  res.render('signup'); // signup.ejs 파일을 렌더링
});

app.post('/signup', (req, res) => {
  const userData = req.body;
  console.log('Received userData:', userData); // 받은 데이터 확인
  // 사용자로부터 받은 데이터를 사용하여 동적으로 쿼리 생성
  const query = connection.query('INSERT INTO user SET ?', userData, (error, results) => {
    if (error) {
      console.error('Error inserting user:', error);
      res.json({ success: false });
    } else {
      console.log('User inserted:', results);
      res.json({ success: true });
    }
  });

  console.log(query.sql); // 동적으로 생성된 SQL 문 출력
});
// 기타 라우팅 및 서버 시작...

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});