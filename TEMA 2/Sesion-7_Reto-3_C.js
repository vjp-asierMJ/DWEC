const IVA = 0.21;
let mensaje = "Envío: 5 €";

function calcularTotal(precios) {
    let total = 0;

    // ERROR 1:
    // Se usa <=, pero debería ser <.
    // Cuando i llegue a precios.length, precios[i] no existe.
    for (let i = 0; i <= precios.length; i++) {
        total += precios[i];
    }

    const ultimo = precios[precios.length - 1];

    if (total > 100) {

        // ERROR 2:
        // Aquí se vuelve a declarar "mensaje" con let.
        // Esta variable solo existe dentro del if.
        // Por eso el mensaje exterior sigue siendo "Envío: 5 €".
        let mensaje = "Envío gratis";
    }

    return total * (1 + IVA);
}

function mostrarResumen(precios) {
    const total = calcularTotal(precios);

    console.log(`Total con IVA: ${total.toFixed(2)} €`);
    console.log(mensaje);

    // ERROR 3:
    // "ultimo" está declarado dentro de calcularTotal(),
    // por lo que aquí no existe.
    console.log(`Último producto: ${ultimo} €`);
}

mostrarResumen([40, 35, 30]);