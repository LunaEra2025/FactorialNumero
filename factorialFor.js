// Función factorial con ciclo for
function factorialIterativo(n) {
    if (n < 0) {
        return "No existe factorial para números negativos";
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso
console.log(factorialIterativo(5)); // Resultado: 120



function serieFactorial(n) {
    if (n < 0) {
        console.log("No existe factorial para números negativos");
        return;
    }

    let resultado = 1;
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            resultado = 1;
        } else {
            resultado *= i;
        }
        console.log(`${i}! = ${resultado}`);
    }
}

// Ejemplo: serie hasta 10
serieFactorial(10);
