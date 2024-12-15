$(document).ready(function(){
    $.ajax({
        url:"assets/json/data.json",
        type:"get",
        success:function(data){
// console.log(data)
let mob ="";
let modal ="";
$.each(data,function(keys,arraycollection){
    

if(keys=='mobile'){
// console.log(arraycollection[0].name)
$.each(arraycollection,function(indexes,objects){
    // console.log(objects.name)
    mob+=`
   <div class="col-lg-3 mt-3">
                <div class="card">
                    <img src="${objects.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${objects.name}</h5>
                      <p class="card-text">${objects.warranty}</p>
                      <a href="#exampleModal${indexes}"
                       data-bs-toggle="modal" 
                      class="btn btn-primary">click</a>
                    </div>
                  </div>  
            </div>
`
modal+=`
 <!-- Modal -->
<div class="modal fade" id="exampleModal${indexes}"aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="row justify-content-center">
            <div class="col-lg-3">
                <img src="
                ${objects.image}
                " alt="" srcset="">
            </div>
            <div class="col-lg-7">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">
                      ${objects.name}
                      </h5>
                      <p class="card-text">
                      ${objects.price}
                      </p>
                       <p class="card-text">
                      ${objects.warranty}
                      </p>
                      <p class="card-text">
                      ${objects.description}
                      </p>
                     
                    </div>
                  </div>
            </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <a href="detail.html"
          class="btn btn-primary">detail</a>
        </div>
      </div>
    </div>
  </div>
`

})
$("#mobile").html(mob);
$("#mod").html(modal);
}
})
        }
    })
})