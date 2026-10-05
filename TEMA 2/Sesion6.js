// ==========================================
// BLOQUE 1 · Igualdad: == frente a ===
// ==========================================

// Pregunta 1
console.log(0 == "");
// Resultado: true
// == convierte los tipos antes de comparar.

// Pregunta 2
console.log(0 === "");
// Resultado: false
// === compara valor y tipo.
// 0 es number y "" es string.

// Pregunta 3
console.log("0" == false);
// Resultado: true
// == convierte los tipos antes de comparar.

// Pregunta 4
console.log(null == undefined);
// Resultado: true
// Con ==, null y undefined se consideran iguales.

// Pregunta 5
console.log(null == 0);
// Resultado: false
// null solo es igual a undefined usando ==,
// no es igual a 0.

// Pregunta 6
console.log(NaN == NaN);
// Resultado: false
// NaN nunca es igual a sí mismo.

// Pregunta 7
console.log(Number.isNaN(NaN));
// Resultado: true
// Number.isNaN() sirve para comprobar si un valor es NaN.

// ==========================================
// BLOQUE 2 · Comprobaciones de orden
// ==========================================

// Pregunta 1
console.log("10" < "9");
// Resultado: true
// Son dos strings, por lo que se comparan como texto.
// "10" empieza por "1" y "1" es menor que "9".

// Pregunta 2
console.log("10" < 9);
// Resultado: false
// Como se compara un string con un número,
// "10" se convierte a 10.
// 10 < 9 es false.

// Pregunta 3
console.log("Zorro" < "abeja");
// Resultado: true
// Las cadenas se comparan carácter por carácter.
// "Z" tiene un valor menor que "a".

// Pregunta 4
console.log(3 > 2 > 1);
// Resultado: false
// JavaScript lo evalúa de izquierda a derecha:
// 3 > 2 → true
// true se convierte en 1
// 1 > 1 → false

// Pregunta 5
console.log(1 < 2 < 3);
// Resultado: true
// JavaScript lo evalúa de izquierda a derecha:
// 1 < 2 → true
// true se convierte en 1
// 1 < 3 → true

// Pregunta 6
console.log(null >= 0);
// Resultado: true
// En esta comparación, null se convierte en 0.
// 0 >= 0 → true.

// Pregunta 7
console.log(0.1 + 0.2 === 0.3);
// Resultado: false
// Los números decimales pueden tener pequeñas imprecisiones
// debido a la forma en que JavaScript representa los números.


//Conclusión 

let x = "7";

x = Number(x);

if (x >= 1 && x <= 10) {
    console.log("x está entre 1 y 10");
}

// ==========================================
// BLOQUE 3 · OPERADORES LÓGICOS Y CORTOCIRCUITO
// ==========================================

// Pregunta 1
console.log(true && false);
// Resultado: false
// && devuelve true solo si las dos condiciones son true.

// Pregunta 2
console.log(true || false);
// Resultado: true
// || devuelve true si al menos una condición es true.

// Pregunta 3
console.log(!!"");
// Resultado: false
// "" es un valor falsy.
// El primer ! lo convierte en true y el segundo ! en false.

// Pregunta 4
console.log(!!"0");
// Resultado: true
// "0" es un string no vacío, por lo que es truthy.

// Pregunta 5
console.log(0 || "sin datos");
// Resultado: "sin datos"
// 0 es falsy, así que || devuelve el segundo valor.

// Pregunta 6
console.log("Ana" && "Luis");
// Resultado: "Luis"
// Los dos strings son truthy.
// && devuelve el último valor si todos son truthy.

// Pregunta 7
console.log(0 ?? "sin datos");
// Resultado: 0
// ?? solo utiliza el segundo valor cuando el primero es null o undefined.
// Como 0 no es null ni undefined, devuelve 0.

// Pregunta 8
console.log(5 > 3 && "hola");
// Resultado: "hola"
// 5 > 3 es true, así que && devuelve el segundo valor: "hola".

//Conclusion

console.log("Hola" && "Adiós"); // "Adiós"
console.log(0 && "Hola");       // 0

//Una utilidad muy común es poner un valor por defecto:

let nombre = "";

let resultado1 = nombre || "Usuario";
console.log(resultado);





// Parte B . Reto 2 


let nota;
nota = prompt("Introduce la nota");
nota = Number(nota);
if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    switch (true) {
        case nota < 5: console.log("Insuficiente");
            break;
        case nota < 6: console.log("Suficiente");
            break;
        case nota < 7: console.log("Bien");
            break;
        case nota < 9: console.log("Notable");
            break;
        case nota >= 9: console.log("Sobresaliente");
            break;
    }


    //Ternario
    let resultado = nota >= 5 ? "Aprobado" : "Suspenso"; console.log(resultado);
} else {
    console.log("Error");


}


