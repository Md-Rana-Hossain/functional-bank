document.getElementById('submit-btn').addEventListener('click', function () {

    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    // console.log(userEmail, userPassword);

    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        // window.location.href = "banking.html";
        window.location.href = "banking.html";
    }
    else {
        alert('Invalid user Email or Password. Please give a valid info!');
    }


});