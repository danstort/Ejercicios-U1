window.onload = function(){

let persona = new Object();

persona.nombre = "Pepe";
persona.apellido = "García";
persona.edad = 25;

persona.jubilacion = function(){

    return "Te queda para jubilarte "+(65-this.edad)+" años.";

}
console.log(persona.jubilacion())

persona.altura=175;

persona.estatura = function(){

    return "Mides "+this.altura+" cm."

}

console.log(persona.estatura());
}