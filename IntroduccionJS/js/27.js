//POO programacion orientada a objetos

//object literal
const producto =  {
    nombre: 'tablet',
    precio: 500,
}



// Object Constructor

function Producto( nombre, precio, ) {
    this.nombre= nombre;
    this.precio= precio;
} 
  
 // prototipe crear funciones que solo s eusan en un objeto especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: ${this.precio} `;
}


const producto2 = new Producto ('Monitor curvo de 49"', 800 );
const producto3 = new Producto ('laptop', 300);


function formatearProducto(){
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio} `;
}




console.log(producto2);
console.log(producto3);

console.log(formatearProducto(producto2));



