function ImgPreview(sImg){
    let bImg = document.querySelector("#bimg");
   bImg.src=sImg.src
//    console.log(sImg.src)
}

// add to cart
let count=1;
let numInput = document.querySelector("#num");
function Increament(){
count++;
numInput.value=count
}

function Decreament(){
    if(count>1){
        count--;
        numInput.value=count;
    }else{
        alert("at least 1 item should be selected in the cart")
        numInput.value=1;
    }
}
document.querySelector("#AddToCart").addEventListener('click',()=>{
    alert('your product add into cart')
})