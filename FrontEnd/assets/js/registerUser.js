document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const registrationData = {
        UserName: document.getElementById('fullname').value,
        Email: document.getElementById('email').value,
        Password: document.getElementById('password').value,
        Birth: document.getElementById('age').value,
        IsActive: 1 // hoặc giá trị phù hợp nếu bạn có điều kiện kích hoạt
    };

    fetch('https://localhost:7136/api/Registration/registration', { // Thay thế bằng URL API đăng ký của bạn
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Hiển thị thông báo đăng ký
        })
        .catch(error => console.error('Error:', error));
});