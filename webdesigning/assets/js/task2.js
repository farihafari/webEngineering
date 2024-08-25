let name = "fariha";
let email = "admin@gmail.com";
let password = "admin1234";
 let uemail = prompt("enter your email ");
 let upass = prompt("enter your password");
 if(uemail && upass){
    if(uemail==email && upass == password){
        alert("dear! "+ name+" you have logged in successfully");

    }else{
        alert("invalid data");

    }
 }else{
    alert("fields are required to fill");

 }
