document.getElementById('contact-form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    alert('Invalid email address!');
    event.target.reset();
  }
});
