import { delta, bhaskara} from './calculadora.js'

function calcular() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    if ((a == 0 && b == 0 && c == 0) || (a == null && b == null && c == null)) {
        alert("Os valores informados devem ser diferentes de zero e diferentes de null");
    } else {
        let deltaCalculado = delta(a,b,c);
        let resultado = bhaskara(a,b,deltaCalculado);

        document.getElementById("resultado").innerHTML = "<b> x'</b> = " + resultado.x1.toFixed(2) + " <br> <b>&nbsp;x\"</b> = " + resultado.x2.toFixed(2);
    }
}

document.getElementById("calcular").addEventListener("click", calcular);