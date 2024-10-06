let a = 0;
let username = prompt("enter your name");
pincode = "216@";
do{
    a = prompt("enter pin code for logged in");
if(a!=pincode){
    alert("invalid pincode please enter a valid pincode");

}
}while(a!==pincode);
alert("logged in successfully");
document.getElementById("username").innerHTML ="dear "+username
// document.write("username").innerHTML="demo "+username;