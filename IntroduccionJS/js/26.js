//this hace referencia a los mismos valores del objeto hay qye usar el function como en le ejemplo
const reservacion ={
    nombre: 'juan',
    apellido: 'de la torre',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }

}

const reservacion2 ={
    nombre: 'pedro',
    apellido: 'de la torre',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }

}


reservacion.informacion();
reservacion2.informacion();