detailjs();
function ImgPreview(sImg){
    let bImg = document.querySelector("#bimg");
   bImg.src=sImg.src
//    console.log(sImg.src)
}

// add to cart
let count=1;
let numInput = document.querySelector("#num");
function Increament(){
let ProPrice = document.getElementById("ProPrice").innerText;

count++;
numInput.value=count;
// console.log(ProPrice.innerText)
document.querySelector("#pp").innerHTML=ProPrice*numInput.value;
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
function detailjs(){
    let url = window.location.href;
    let getUrl = new URL(url);
    let productkey = getUrl.searchParams.get("pId");
    // console.log(product);
    let images ="";
    let textd = "";
$.ajax({
    url:"assets/json/data.json",
    type:"get",
    success:function(data){
        $.each(data,function(keys,collection){
            // console.log(keys)
            $.each(collection,function(indexes,objects){
                // console.log(indexes)
                if(keys+indexes==productkey){
                images = `
                        <img id="bimg" src="${objects.image}" class="card-img-top" alt="...">
                
                `
                textd =    `
               
                <h5 class="card-title">Product Name: ${objects.name}</h5>
                <p class="card-text">product Description: ${objects.description}</p>
                <p class="card-text"  >product Price: <span id="ProPrice">${objects.price}</span></p>
                <p class="card-text">product Warranty: ${objects.warranty}</p>
           

             
                `
                $("#imgdata").html(images);
                $("#textdata").html(textd);

                }
            })
        })
    }
})

}
