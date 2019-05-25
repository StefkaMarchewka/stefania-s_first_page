function validateForm(){
    var email =  document.getElementById("email").value;
    var name = document.getElementById("name").value;

    if (!checkEmail(email)){
        alert("email: " + email + "  is incorrect");
        
    }
    else if (!checkName(name)){
        alert("Name " + name + " is incorrect. Name should have capital letter at beginnig, no numbers allowed.");
    }

    else {
        alert("Message has been send sucessfully");
    }
    
}

function checkName(name){
    let nameReg = /^[A-Z][a-z]{1,18}\s[A-Z][a-z]{1,18}$/;
    return nameReg.test(name);
}

function checkEmail(email){
    let emaiReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emaiReg.test(email);
}

function setStartCon(){
    document.getElementById("submitBut").disabled = true;
}

function checkIsFilled(){
    var email =  document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("comment").value;

    
    if(name.length > 0 && email.length >0 && message.length >0){
        document.getElementById("submitBut").disabled = false;
    }

}

