
let name = prompt("enter your name?");
let gender = prompt("enter your gender? (female or male)");

if (gender == "male") {
    let car = prompt("enter your favourite car?")
    if (car.length){
        alert("uzunlug"+car.length)
    }
    if (car == "bmw"){
        alert("Yaxshi!")
    }
    else {
        alert("pis")
    }
}
 else if (gender == "female") {
    let color = prompt("enter your favourite color?")
    if (color == "qirmizi"){
        alert("Yaxshi!")
    }
    else {
        alert("pis")
    }
}
else {
alert("duzgun deyil")
}