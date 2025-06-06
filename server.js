// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 建立 MySQL 連線
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'phishing_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected');
});

// 接收前端帳號密碼
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        const sql = 'INSERT INTO accounts (username, password) VALUES (?, ?)';
        db.query(sql, [username, hash], (err, result) => {
            if (err) return res.status(500).send('DB Error');
            res.send('OK');
        });
    } catch (err) {
        res.status(500).send('Hash Error');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});