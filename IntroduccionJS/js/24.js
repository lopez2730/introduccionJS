// for loop

// for( let i=0; i<=10; i++ ){
//     console.log(i);
// }

// for( let i=0; i<=100; i++ ){
//    if( i%2===0 ){
//        console.log(`el numero ${i} es PAR`);
//    } else{
//     console.log(`el numero ${i} es IMPAR`);
//    }
// }
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

for(let i = 0; i < carrito.length; i++ ) {
    console.log( carrito[i].nombre );
}


//while loop evalua la condicion y ve si es verdadera

// let i = 1; //indice
// while(i<=10){ //condicion
//     if(i%2===0){
//         console.log(`el numero ${i} es PAR`);
//     }else{
//         console.log(`el numero ${i} es IMPAR`);
//     }

//     i++;//incremento

//}


//do while loop se ejecuta la primera vez aunque no cumpla la condicion

let i=0;

do{
    console.log(i)
    i++;
}while(i<10)