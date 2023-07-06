function validation() {
    // e.preventDefault();
    var firstname = document.Formfill.Firstname.value;
    var lastname = document.Formfill.Lastname.value;
    var email = document.Formfill.Email.value;
    var password = document.Formfill.Password.value;

    // Check if first name is empty
    if (firstname == "") {
        document.getElementById("result").innerHTML = "Please enter your first name";
        return false;
    }

    // Check if last name is empty
    if (lastname == "") {
        document.getElementById("result").innerHTML = "Please enter your last name";
        return false;
    }

    // Check if email is empty
    if (email == "") {
        document.getElementById("result").innerHTML = "Please enter your email";
        return false;
    }

    // Check if email is valid
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("result").innerHTML = "Please enter a valid email address";
        return false;
    }

    // Check if password is empty
    if (password == "") {
        document.getElementById("result").innerHTML = "Please enter your password";
        return false;
    }

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        document.getElementById("result").innerHTML = "Password must be at least 8 characters long";
        return false;
    }
    
    let result = 'First Name:' + firstname;
    result +=  'Last Name:' + lastname;
    result +=  'Email:' + email;
    result +=  'Password:' + password;
    document.getElementById("display").innerHTML = `${firstname}  ${lastname}  ${email}`;
    document.getElementById("popup").style.visibility = "visible";

    return false;
}