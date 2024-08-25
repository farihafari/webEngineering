let qualification=prompt("enter your qualification");

switch(qualification){
    case "matric":
      alert("not eligible") ;
      break;

      case "intermediate":
        alert("you may eligible for admin system");
        break;

        case "bachelor":
            alert('you may eligible for coordinator');
            break;
            default:
                alert("wrong data")
}