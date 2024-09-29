let a = 0;
let username = prompt("enter your name");
pincode = "fj1216@";
do{
    a = prompt("enter pin code for logged in");
if(a!=pincode){
    alert("invalid pincode please enter a valid pincode");

}
}while(a!==pincode);
alert("logged in successfully");
document.getElementById("demo").innerHTML="dear "+username;