document.getElementById('contain').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://localhost:7136/api/Registration/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid Credentials');
            }
            return response.json();
        })
        .then(data => {
            alert(data.Message);
            // Xử lý dữ liệu đăng nhập thành công ở đây
        })
        .catch(error => {
            alert(error.message);
            // Xử lý lỗi đăng nhập ở đây
        });
});