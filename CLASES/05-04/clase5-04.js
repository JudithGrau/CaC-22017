// FUNCIONES
/* palabra reservada  
nombre de la funcion
parametros () */

/* function sumar (num1,num2,nombre)  {

    document.write(`${nombre} el resultado es :  ${(num1+num2)}`);
}
sumar(Number(prompt ("escribe el numero 1")),Number(prompt ("escribe el numero 2")),prompt ("escribe dime tu nombre"));  */

// Ejercicio Realizar las funciones: restar, multiplicar, dividir.


/* function letrasDeTuNombre (nombre){
 alert (`${nombre} tu nombre tiene ${nombre.length} letras`)
}

letrasDeTuNombre(prompt ("Dime tu nombre")) */



/* function mayorEdad (nombre,edad){
    if (edad >= 18){
        alert (`${nombre} sos mayor por lo cual: Bienvenido/a`)
    }else {
        alert (`${nombre} sos menor de edad`)
    }
}
mayorEdad(prompt ("Dime tu nombre"),Number(prompt ("escribe tu edad")) ) */


// else .

let edad = Number(prompt ("tu edad"));
let nombre = prompt("tu nombre");

/* if (edad >= 18){
    alert (`${nombre} sos mayor por lo cual: Bienvenido/a`)
}else {
    alert (`${nombre} sos menor de edad`)
} */


//if ternario
let mayorDeEdad = (edad > 18) ?alert (`${nombre} sos mayor por lo cual: Bienvenido/a`) : alert (`${nombre} sos mayor por lo cual: Bienvenido/a`);