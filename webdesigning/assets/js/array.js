// let arr = ["ali","sana","asad","saba","zahid"];
let studentDetail = [
    ['ali',20,"web desinging","ali@gmail.com"],
    ['alisha',20,"web desinging","ali@gmail.com"],
    ['aliya',20,"web desinging","ali@gmail.com"],
    ['alishba',20,"web desinging","ali@gmail.com"],    
    ['aliyan',20,"web desinging","ali@gmail.com"],
]
// document.write(arr[0]+"<br>"+arr[2]);
// document.write(arr.length)
// console.log(arr[0]);
for(let i =0;i<studentDetail.length;i++ ){
    document.write("<br><br> ")

    for(let j=0;j<studentDetail[i].length;j++){

        document.write(studentDetail[i][j]+"&nbsp;&nbsp;")
    }
}