let data;
if (localStorage.userData != null) {
    data = JSON.parse(localStorage.userData);
} else {
    data = [];
}


const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
function loginChack() {
    const email = loginEmail.value;
    const password = loginPassword.value;
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (data.length == 0) {
        alert('No users found in the database');
        return;
    }

    let userFound = false;

    for (let i = 0; i < data.length; i++) {
        if (data[i].registerEmail === email && data[i].registerPassword === password) {
            userFound = true; // User is found
            alert('You have been logged in successfully');
            if (data[i].usertype === "admin") {
                alert('You have been logged in as admin');
                window.location.href = "../../Crud/index.html";
            } else {
                // Redirect to user home page
                window.location.href = "../../Home/Home.html"; // Uncomment this line
            }
            break; // Exit loop once the user is found
        }
    }

    // If no user is found, show an error message
    if (!userFound) {
        alert('Invalid email or password');
    }
}

