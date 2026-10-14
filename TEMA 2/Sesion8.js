// Parte A

const compra = ["pan", "leche", "huevos", "pan", "tomates", "leche", "pan"];


// A1
// Añadimos aceite al final
console.log("========== A1 ==========");

compra.push("aceite");

// Mostramos cuántos productos hay
console.log("Total de productos:" + compra.length);

// Comprobamos si hay huevos
console.log("¿Hay huevos?" + compra.includes("huevos"));

// Mostramos la posición de tomates
console.log("Posición de tomates:" + compra.indexOf("tomates"));

// Quitamos huevos si están en la lista
const posicionHuevos = compra.indexOf("huevos");

    compra.splice(posicionHuevos, 1);


console.log("Lista sin huevos:", compra);



//A2

console.log("========== A2 ==========");

// Creamos un Set a partir de la lista
const productosUnicos = new Set(compra);

// Mostramos los productos distintos
console.log("Productos distintos:" + productosUnicos);

// Contamos los productos distintos
console.log("Número de productos distintos:" + productosUnicos.size);

// Comprobamos si leche está en el Set
console.log("¿Está leche?" + productosUnicos.has("leche"));


//A3

console.log("========== A3 ==========");

// Creamos un Map para contar las unidades
const cantidades = new Map();

// Recorremos la lista
for (const producto of compra) {
    if (cantidades.has(producto)) { //si encuentra el producto
        cantidades.set(
            producto, //ponemos el nombre del producto en el mapa como clave
            cantidades.get(producto) + 1 //le añadimos un producto mas
        );
    } else {
        cantidades.set(producto, 1); // si no lo encuentra en el mapa lo crea
    }
}

// Mostramos las cantidades de cada producto
for (const [producto, cantidad] of cantidades) {
    console.log(producto + ": " + cantidad);
}
