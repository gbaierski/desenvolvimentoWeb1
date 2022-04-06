function soma (a, b) {
    return a + b
}

function subtracao (a, b) {
    return a - b
}

function multiplicacao (a, b) {
    return a * b
}

function divisao (a, b) {
    return a / b
}

function delta(a,b,c) {
   return Math.pow(b, 2) - 4 * a * c;
}

function bhaskara(a,b,delta) {
    let x1, x2;

    if (delta == 0) {
        x1 = "NaN";
        x2 = "NaN";
    } else {
        x1 = (-1 * b + Math.sqrt(delta))/ (2*a);
        x2 = (-1 * b - Math.sqrt(delta))/ (2*a);
    }

    return {x1,x2}; 
}

export { soma, subtracao, multiplicacao, divisao, delta, bhaskara }