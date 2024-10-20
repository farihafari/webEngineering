let students = [
    
        {
            name:"ali",
            age:23,
            course:"it diploma",
        
        },
        {
            name:"aliyan",
            age:23,
            course:"it diploma",
        
        },
        {
            name:"alisha",
            age:23,
            course:"it diploma",
        
        }

]
// document.write(student.name+"<br>"+student.age);
for(let key in students){
    document.write(students[key].name+"<br>"+students[key].course+"<br>");
}