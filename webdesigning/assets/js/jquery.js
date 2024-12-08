$(document).ready(function()
{
    // alert("fvdsgvusgfiu")
    $("#hide").click(function(){
        $("p").hide('slow');
    })
    $("#show").click(function(){
        $("p").show('fast');
    })
    $("#toggle").click(function(){
        $("p").toggle(2000 );
    })
})
// document.querySelector("#hide").addEventListener('click',()=>{
//     let p = document.querySelector("#pp");
//     p.style.display='none'
// })