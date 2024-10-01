window.onload = function () {

    let operacion = 0;
    let resultado = "";

    for (i = 0; i < 25; i++) {

        operacion = operacion + 11;
        resultado = resultado+operacion+" ";

    }

    console.log(resultado);
}