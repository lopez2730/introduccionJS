//arrays

const numeros= [10,20,30,40,50]

// console.log(numeros);


// const meses=['enero','febrero','marzo','abril','mayo'];

// console.table(meses);

//acedeer a los valeres del array
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);


// //conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero){//foreach te enseña los elementos del carrito de compras
//     console.log(numero);
// })

// numeros[5]=60;
numeros.push(60,70,80);//agrega nmumeros al final del array

numeros.unshift(-10,-11,-24);//agrega al inicio

console.table(numeros);

const meses=['enero','febrero','marzo','abril','mayo'];

// meses.pop();//elimina el ultimo elemento del arreglo
// meses.shift();//elimina el primero
// meses.splice(2,1);
// console.table(meses);


// rest operator o spread operator

const nuevoArreglo = ['agosto',...meses, 'junio'];
console.log(nuevoArreglo);