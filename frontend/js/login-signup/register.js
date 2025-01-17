document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const userData = {
        username,
        email,
        password,
        role
    };

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    
    try {
        const emailResponse = await fetch(`https://api.eva.pingutil.com/email?email=${email}`, requestOptions);
        const emailResult = await emailResponse.json();

        if (!emailResult.data.deliverable || emailResult.data.disposable) {
            alert('Email is not valid');
            return;
        }

        const response = await fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            alert('Registration successful');
        } else {
            const errorData = await response.json();
            alert('Error: ' + errorData.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration');
    }
});
