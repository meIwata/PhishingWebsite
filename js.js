document.getElementById('loginBtn').addEventListener('click', function (e) {
                // 這裡可以加上帳號密碼驗證邏輯
                // 假設驗證失敗就顯示錯誤訊息
                document.getElementById('error-summary').style.display = 'block';
                // 若要防止表單送出，取消註解下一行
                // e.preventDefault();
            });