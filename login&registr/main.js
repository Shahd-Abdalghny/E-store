
let data;
if (localStorage.userData != null) {
    data = JSON.parse(localStorage.userData);
} else {
    data = [];
}


document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('name').value;
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;
    const usertype = document.getElementById('usertype').value;

    //password validation
    if (registerPassword.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }


    //check if email is already registered
    for (let i = 0; i < data.length; i++) {
        if (data[i].registerEmail === registerEmail) {
            alert('Email is already registered');
            return;
        }
    }



    // تخزين البيانات في localStorage

    const userData = {
        username: username,
        registerEmail: registerEmail,
        registerPassword: registerPassword,
        usertype: usertype,
    };

    data.push(userData);
    localStorage.setItem('userData', JSON.stringify(data));
    alert(`'Welcome to our website ${username}`);
    window.location.href = './loginpage/login.html';
});




document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('name').value;
  let valid = true;
  if (valid) {
    // Redirect to thank you page with full name in the query string
    window.location.href = `../Home/Home.html?name=${encodeURIComponent(fullName)}`;
    // window.location.href = `categoryProduct.html?name=${encodeURIComponent(fullName)}`;
    // window.location.href = `ProductDetails.html?name=${encodeURIComponent(fullName)}`;
}
});
