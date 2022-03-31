import { bhaskara } from './calculadora.js'

function calcular() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let resultado = bhaskara(a,b,c);

    document.getElementById("resultado").innerHTML = "<b>S =</b> {x1 = " + resultado.x1 + ", x2 = " + resultado.x2 + "}";
}

document.getElementById("calcular").addEventListener("click", calcular);