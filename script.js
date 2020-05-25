
function validation(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const errorBox = document.getElementById("errorMsg");
    let errorText = "";

    // Turn on error box
    errorMsg.classList.add("error-msg--visible");

    // Validate Name field
    if(name.length < 5){
        errorText = "Please enter valid Name";
        errorBox.innerHTML = errorText;

        return false;
    }

    // Validate Email field
    if(email.indexOf("@") == -1 || email.length < 6){
        errorText = "Please enter valid Email";
        errorBox.innerHTML = errorText;

        return false;
    }

    // Validate Phone field
    if(isNaN(phone) || phone.length < 9 || phone.length > 12){
        errorText = "Please enter valid Phone Number";
        errorBox.innerHTML = errorText;

        return false;
    }

    // Validate Subject field
    if(subject.length < 10){
        errorText = "Please enter longer subject";
        errorBox.innerHTML = errorText;

        return false;
    }

    // Validate Message field
    if(message.length <= 140){
        errorText = "Please include at least 100 characters in message";
        errorBox.innerHTML = errorText;

        return false;
    }

    alert("Question sent! We will get back to you as soon as possible");
    return true;
}