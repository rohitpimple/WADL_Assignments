function validateForm() {
    var name = document.getElementById('signupUsername').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('signupConfirmPassword').value;
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
        alert("Enter valid Email");
        return false;
    }
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert('Please fill in all fields.');
      return false;
    }
    if (password.length < 8) {
      alert("Password must be atleast 8 characters long");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      alert("Password must contain a uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      alert("Password must contain a lower letter");
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      alert("Password must contain a spercial character");      
      return false;
    }
    if (password != confirmPassword) {
      alert("Password doesnt match");
      return false;
    }
    return true;
  }
  
  function submitForm() {
    if (validateForm()) {
      alert("Form Submitted");
    }
  }