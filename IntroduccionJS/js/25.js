const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

//ForEach iterar y mostrar en la consola
// carrito.forEach (producto => console.log(producto.nombre));

//map sirve para crear nuevos arreglos con lo que pongas que quieres retornar. se va llenando con olo que agregues

const arreglo2 = carrito.map (producto => `${producto.nombre} - ${producto.precio}` );

console.log(arreglo2);