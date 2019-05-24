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