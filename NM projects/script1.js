document.getElementById('refreshCaptcha').addEventListener('click', function() {
  const captcha = document.getElementById('captchaImage');
  captcha.src = 'captcha.png?' + Date.now(); // Simulate reload
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const captcha = document.getElementById('captcha').value.trim();

  if (username === '' || password === '' || captcha === '') {
    alert('Please fill out all fields.');
    return;
  }

  alert('Login Successful (Demo)!');
});
