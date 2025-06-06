### 1. 串接MySQL資料庫
### 2. 資料庫的名字為: `phishing_db`
### 3. 資料表名稱為: `accounts`，裡面有三個欄位id、username、password
```sql
CREATE DATABASE IF NOT EXISTS phishing_db;
USE phishing_db;
CREATE TABLE IF NOT EXISTS accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(50)
);
```
在上方工具列點「新建查詢」(New Query Tab)
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密碼';
FLUSH PRIVILEGES;
```
按閃電圖示（Execute）執行。
### 4. 查詢資料表內容
   在 Query 視窗輸入：
```sql
SELECT * FROM accounts;
```
按「執行」查看結果。

### 5. 在專案這邊打開終端機輸入
```bash
npm init -y
npm install express mysql body-parser cors
```
安裝express、mysql、body-parser和cors等套件。
### 6. 前端index.html有一個表單，讓使用者輸入帳號和密碼，每次提交表單時，會將帳號和密碼存入資料庫

### 7. 在後端（server.js）對密碼進行加鹽雜湊後再存入資料庫
安裝 bcrypt
```bash
npm install bcrypt
```
修改 server.js，將密碼加鹽雜湊後再寫入 MySQL
### 8. 開啟連線 ⮕ 打開終端機
每次執行index.html時，需先啟動Node.js伺服器，這樣前端的表單提交才會有後端處理。
```bash
node server.js
```
