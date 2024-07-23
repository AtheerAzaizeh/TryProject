document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const { token, role, user_id } = await response.json();
  
      if (role === 'worker') {
        sessionStorage.setItem('token', token);  // Store token for authenticated requests
        window.location.href = 'cv.html';  // Ensure this path is correct
      } else {
        sessionStorage.setItem('token', token);
        window.location.href = 'dashboard.html';  // Ensure this path is correct
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('login-error').textContent = 'Login failed. Please try again.';
    }
  });
  