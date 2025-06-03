// document.getElementById('loginBtn').addEventListener('click', function (e) {
//     // 這裡可以加上帳號密碼驗證邏輯
//     // 假設驗證失敗就顯示錯誤訊息
//     document.getElementById('error-summary').style.display = 'block';
//     // 若要防止表單送出，取消註解下一行
//     // e.preventDefault();
// });

// 用 AJAX 傳送資料，把帳號密碼傳送到MYSQL
document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const form = document.forms[0];
    const username = form['form.loginId'].value.trim();
    const password = form['form.passw0rd'].value;

    // Email 格式驗證
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
        alert('請輸入正確的 Email 格式');
        return;
    }
    if (!password) {
        alert('密碼為必填');
        return;
    }

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
        .then(res => res.text())
        .then(msg => {
            alert('帳號密碼驗證中');
            // 清空帳號與密碼欄位
            form['form.loginId'].value = '';
            form['form.passw0rd'].value = '';
        })
        .catch(() => {
            document.getElementById('error-summary').style.display = 'block';
        });
});