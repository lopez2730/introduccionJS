
//arrow function
const sumar2= (n1,n2)=> console.log(n1+n2);

sumar2(5,10);

const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`)


aprendiendo ('JavaScript')


const meses=['enero','febrero','marzo','abril','mayo'];

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


//forEach
meses.forEach(mes => {
    if(mes=='marzo'){
        console.log('marzo si existe');
    }
});


//some ideal para array de objetos
resultado = carrito.some(producto => producto.nombre ==='celular');
    

//Reduce
resultado=carrito.reduce((total,producto) =>  total+producto.precio,0);


//filter
resultado=carrito.filter(producto => producto.precio<400)


console.log(resultado);

