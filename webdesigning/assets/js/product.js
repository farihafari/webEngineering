let product =[
{
    name:"vivo",
    price:49899,
    description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time.",
    image:"assets/images/m1.jpg"

},
{
    name:"infinix",
    price:49899,
    description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time.",
    image:"assets/images/m5.jpg"

},
{
    name:"vivo",
    price:49899,
    description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time.",
    image:"assets/images/m2.jpg"

},
{
    name:"techno",
    price:49899,
    description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time.",
    image:"assets/images/m3.jpg"

},
{
    name:"redmi",
    price:49899,
    description:"Tech giant Vivo introduced the V40 series of smartphones, which appears to be very close to hitting the local and global markets at the same time.",
    image:"assets/images/m4.jpg"

}
];
let x="";
for(let keys in product){
    x+=`<tr>
        <td>${product[keys].name}</td>
        <td>${product[keys].price}</td>
        <td>${product[keys].description}</td>
        <td><img src="${product[keys].image}"></td>
    </tr>`
}
document.querySelector("#data").innerHTML=x;