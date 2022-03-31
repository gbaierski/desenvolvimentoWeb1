import { bhaskara } from './calculadora.js'

function calcular() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let resultado = bhaskara(a,b,c);

    document.getElementById("resultado").innerHTML = "<b> x'</b> = " + resultado.x1.toFixed(2) + " <br> <b>&nbsp;x\"</b> = " + resultado.x2.toFixed(2);
}

document.getElementById("calcular").addEventListener("click", calcular);