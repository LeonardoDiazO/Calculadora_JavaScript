/* Agarrar los elementos  que estan en el HTML  */
const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")
/* boton calcular event  */
btnCalcular.addEventListener('click', calcular)
/* funcion para calcular */
function calcular() {
    console.log(txtOperacion.value) /* podemos ver en consola que esta tomando la variable del input operacion */
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)
    if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"  ||isNaN(op1) ==false && !isNaN(op2) ==false ) {
        let resultado;
        switch (operacion) {
            case "+":
                resultado = op1 + op2
                break;//divide los resultados en uno por uno
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
        }
        console.log("Calculo posible")
        pResultado.style = "color:black"
        pResultado.innerText = "=" + resultado
    } else {
        console.log("Calculo imposible")
        pResultado.style = "color:red" //Colocarle color a las letras de mensaje en pantalla
        pResultado.innerText = "Calculo Imposible"
    }
}









