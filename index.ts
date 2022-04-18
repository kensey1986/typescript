console.log('====================================');
console.log('hola mundo');
console.log('====================================');

//types

// function sumar(a:number,b:number): number{
//     return a+b
// }

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

interface Persona{
    nombre: string;
    apellido: string;
    edad?: number;
}

const data: Persona= { nombre: 'pepe', apellido: 'perez', edad:55}

function recibeObj( persona: Persona):void{
    console.log(persona.apellido)
    console.log(persona.nombre)
    console.log(persona.edad)
    document.write(persona.edad.toString())
}
recibeObj(data);