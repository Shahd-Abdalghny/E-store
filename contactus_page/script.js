document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Create an object to store the form data
    let formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // استرجاع الرسائل المخزنة من localStorage (أو إنشاء مصفوفة جديدة)
    let messages = JSON.parse(localStorage.getItem('contactForms')) || [];

    // إضافة الرسالة الجديدة إلى المصفوفة
    messages.push(formData);

    // Save the form data to localStorage (باستخدام المفتاح الصحيح)
    localStorage.setItem('contactForms', JSON.stringify(messages));

    // Alert the user
    alert('Your message has been saved!');

    // Uncomment the following line if you want to redirect to another page after saving
    // window.location.href = './../Admin/Messages.html';

    // Reset the form
    document.getElementById('contactForm').reset();
});

// Function to retrieve data from localStorage
document.getElementById('retrieveButton').addEventListener('click', function() {
    // Get the stored data
    let storedData = localStorage.getItem('contactForms');

    // Check if there is data to display
    if (storedData) {
        let messages = JSON.parse(storedData);
        let displayArea = document.getElementById('storedInfo');

        // Display each message
        displayArea.innerHTML = ''; // Clear previous content
        messages.forEach((formData, index) => {
            displayArea.innerHTML += `
                <p><strong>Message #${index + 1}</strong></p>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
                <hr>
            `;
        });
        displayArea.style.display = 'block'; // Show the stored data section
    } else {
        alert('No data found!');
    }
});

// Function to clear the stored data from localStorage
document.getElementById('clearButton').addEventListener('click', function() {
    localStorage.removeItem('contactForms');
    alert('Stored data cleared!');

    // Hide the stored info display area
    document.getElementById('storedInfo').style.display = 'none';
});
        