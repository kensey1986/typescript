console.log('====================================');
console.log('hola mundo');
console.log('====================================');

//types

function sumar(a:number,b:number): number{
    return a+b
}

// const resultado: number = sumar(15,15);

// document.write(resultado.toString())


/**
 * estableciendo types a los argumentos de una funcion
 */
// function imprime(texto:string):void{
//     console.log(texto);
// document.write(texto)

// }
// imprime('hola soy un texto');

interface IPersona{
    nombre: string;
    apellido: string;
    edad?: number;
    direccion: string
}

const data: IPersona = { nombre: 'pepe', apellido: 'perez', edad: 35,  direccion: 'alguna cadena '}

function recibeObj( cliente:IPersona):IPersona{
    console.log('================llegando====================');
    console.log(cliente);
    console.log('====================================');
    cliente.nombre = 'pedrito';
    // delete cliente.edad;
    document.write(cliente.edad.toString())
    console.log('================modificado====================');
    console.log(cliente);
    console.log('====================================');
    return cliente;
}
/**
 * llamado a la funcion y envio de argumentos
 */
recibeObj(data);

const miArray:[IPersona, string, number, any]=[ {nombre: 'pepito', apellido: 'perez', edad: 25 }, '55', 55, 'hola', ]

let unNumero:any=0;

unNumero= 'hola';
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