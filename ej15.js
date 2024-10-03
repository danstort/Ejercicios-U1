window.onload = function () {

    let persona = {
        nombre
            : "Juan",
        apellido1: "López",
        apellido2: "Pérez",
        edad: 50,

        jubilacion() {

            //this.edad = edad
            return 65 - (this.edad);

        }

    }
    console.log(persona.jubilacion())


    persona.altura = 30;
    persona.estatura = function (altura) {
        this.altura=altura;
        return "Mide "+altura

    }

    console.log(persona.estatura(persona.altura))

    Object.prototype.mensaje = function(){

        return "Veremos a ver si no te jubilas a los 80";
    }

    console.log(persona.mensaje());

}