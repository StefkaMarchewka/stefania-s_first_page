function myfunction(){
    console.log("it works");
    var email =  document.getElementById("email").value;
    var name = document.getElementById("name").value;
    if (checkName(name)){
        alert("name is correct " + name);
    }else {
        alert("name is incorrect " + name);
    }
    
    if (checkEmail(email)){
       alert("email is correct");
    }
    else {
        alert("email is incorrect");
    }
    
}

function checkName(name){
    let nameReg = /^[A-Z][a-z]{1,18}\s[A-Z][a-z]{1,18}$/;
    return nameReg.test(name);
}

function checkEmail(emial){
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
    console.log("checking");
    console.log(email);
    console.log(name);
    console.log(name.length);

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