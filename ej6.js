window.onload = function () {
    
    let nota1 = prompt("Introduce la primera nota:");
    let nota2 = prompt("Introduce la segunda nota:");
    let nota3 = prompt("Introduce la tercera nota:");

    let promedio =(+nota1+(+nota2)+(+nota3))/3;

    if (promedio>=7){

        alert("Promocionado")

    } else {

        alert("No promociona")
    }
    


}