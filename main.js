//----------Form Validation-------------
function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "3px";

    if(name.length <5){
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length <6){
        text = "Please enter valid email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <=20){
        text = "Please enter more than 20 words";
        error_message.innerHTML = text;
        return false;
    }

    alert("Thank You! We have received your queries. We will get back to you soon.")
    return true;
}
 

