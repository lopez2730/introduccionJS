//objets
const producto={
    nombreProducto: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


// const precioProducto= producto.precio;
// const nombreProducto= producto.nombreProducto;


// console.log(precioProducto);
// console.log(nombreProducto);


//destructuring fomra nueva

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);