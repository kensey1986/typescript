console.log('====================================');
console.log('hola mundo');
console.log('====================================');
//types
function sumar(a, b) {
    return a + b;
}
var data = { nombre: 'pepe', apellido: 'perez', edad: 35, direccion: 'alguna cadena ' };
function recibeObj(cliente) {
    console.log('================llegando====================');
    console.log(cliente);
    console.log('====================================');
    cliente.nombre = 'pedrito';
    // delete cliente.edad;
    document.write(cliente.edad.toString());
    console.log('================modificado====================');
    console.log(cliente);
    console.log('====================================');
    return cliente;
}
/**
 * llamado a la funcion y envio de argumentos
 */
recibeObj(data);
var miArray = [{ nombre: 'pepito', apellido: 'perez', edad: 25 }, '55', 55, 'hola',];
var unNumero = 0;
unNumero = 'hola';
// class User implements IPersona {
//     nombre: string;
//     apellido: string;
//     edad?: number;
//     constructor(
//         nombre: string,
//         apellido: string,
//         edad: number
//     ){
//         this.nombre = nombre;
//         this.apellido= apellido;
//         this.edad= edad;
//     }
// }
