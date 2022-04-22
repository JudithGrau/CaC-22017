/* Ejercicios

1. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor 
  //Función max() devuelve el mayor de los argumentos pasados.
    Ejemplo Math.max(edad1, edad2, edad3)
*/

//PEDIMOS TODOS LOS DATOS
/* var nombre1 = prompt("Nombre 1:");
var edad1 = Number(prompt("Edad 1:"));

var nombre2 = prompt("Nombre 2:");
var edad2 = Number(prompt("Edad 2:"));

var nombre3 = prompt("Nombre 3:");
var edad3 = Number(prompt("Edad 3:")); */

//Función max() devuelve el mayor de los argumentos pasados.
/* var maximo = Math.max(edad1, edad2, edad3);

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
} */

/* ------------------------------------------------------------------------------------------------------------------------------ */
/*   2. Realiza un script que genere un número aleatorio entre 1 y 99 */
    //FUNCIÓN Math.floor: redondea al número entero menor.
    //FUNCIÓN Math.random: devuelve un número aleatorio mayor que 0 y menor que 1

    var num = Math.floor((Math.random() * 99) + 1);
    document.write(num);












































/* let respuesta = "OTTAWA"; 	 	 
let acierto = false; 	 	 
let contador = 0;	 	 

while(contador < 3 && acierto === false) {	 	 
    let respUsuario = prompt("Capital de Canada: (Tenes 3 intentos)").toUpperCase();	 	 
 if (respUsuario === respuesta) { 	 	 
 acierto = true; 	 	 
 document.write("Felicitaciones, acertaste");	 	 
 }	 	 
 contador++;	 	 
}	 	 
if (!acierto) {
    document.write("Lo sentimos, has consumido tus 3 intentos")
}; 	 	 

 */