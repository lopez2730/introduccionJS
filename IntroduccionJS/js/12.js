// "use strict" //correr js en modo estricto

//objetos 

const producto = {
    nombreProducto: "monitor 20 pulgadas",
    precio:300,
    disponible:true,
}

Object.freeze(producto);

producto.image="imagen.jpg";


console.log(producto);