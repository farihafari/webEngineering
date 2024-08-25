let percentage = prompt("enter your percentage for checking eligibilty criteria");

if (percentage > 90 && percentage <= 100) {

    alert("you may eligible to take admission in pre-medical or pre-engineering or computer science or arts and commerce");
}
else if (percentage > 80) {
    alert("you may eligible to take admission in  pre-engineering or computer science or arts and commerce ");

}
else if (percentage > 70) {
    alert("you may eligible to take admission in   computer science or arts and commerce ");

}
else if (percentage > 60) {
    alert("you may eligible to take admission in    arts and commerce ");

}
else if (percentage > 40) {
    alert("you may eligible to take admission in  arts ");

} else {
    alert("you may not eligible to take admission here ");

}