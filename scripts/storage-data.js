window.onload = function () {
  // Check for LocalStorage support.
  if (localStorage) {
    // Add an event listener for form inputs
    document.getElementById('contact-form').addEventListener('input', () => {
      // Get the value of the form types
      const formName = document.getElementById('name').value;
      const formEmail = document.getElementById('email').value;
      const msg = document.getElementById('msg').value;

      const data = {
        storedName: formName,
        storedEmail: formEmail,
        storedMsg: msg,
      };
      // Save the object in localStorage.
      localStorage.setItem('formData', JSON.stringify(data));
    });
  }
};