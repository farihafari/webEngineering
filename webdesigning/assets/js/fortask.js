let initial = parseInt(prompt("enter your initial number"));
let final = parseInt(prompt("enter your final number"));
let div = document.getElementById("b");
let x= "";
// document.write(!isNaN(initial));
if(initial && final){
if(!(isNaN(initial) && isNaN(final)))
{
if(initial<final)
{
for(let i=initial; i<=final;i++){
        x+="<p>"+i+"</p>";
    }
}else{
    alert("final value should be greater then to initial value");
    location.assign('fortask.html')
}
}
    
}else{
    alert("both fields are required to fill");
    location.assign('fortask.html')
}

div.innerHTML=x