function LC_storage(){
localStorage.setItem("name","kinza");

localStorage.setItem("email","fariha@gmail.com");
localStorage.setItem("no",4564778);
localStorage.removeItem("no");
// localStorage.clear()
}
function SC_storage(){
sessionStorage.setItem("name","kinza");
}
let x =localStorage.getItem("name");
document.write(x);