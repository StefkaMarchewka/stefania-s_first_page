function validateForm(){
    console.log("it works");
    var email =  document.getElementById("email").value;
    var name = document.getElementById("name").value;

    if (!checkEmail(email)){
        alert("email is incorrect" + email);
        
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
    document.getElementById("name").value = "Enter your name";
    document.getElementById("email").value = "Enter your email";
}

function checkIsFilled(){
    var email =  document.getElementById("email").value;
    var name = document.getElementById("name").value;
    
    if(name.length > 0 && email.length >0){
        console.log("condition true");
        document.getElementById("submitBut").disabled = false;
    }

}

function clearNameForm(){
    document.getElementById("name").value = "";
}

function clearEmailForm(){
    document.getElementById("email").value = "";
}