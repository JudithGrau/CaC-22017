/* Ejercicios
------------------------------------------------------------------------------------------------------------------------------------------------
1. Realiza un script que pida un texto y lo muestre en mayúsculas.
Investigar e implementar:  .toUpperCase */

/* var texto = prompt("Introduce el texto");
    document.write("TEXTO: " + texto.toUpperCase() + "."); */

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* 2. Realiza un script que cuente el número de vocales que tiene un texto. */
/* var cadena = prompt("Introduce una cadena de texto:");
    //Devuelve la longitud del string.
    var numchar = cadena.length;    
    //Devuelve el string en mayúsculas.
    cadena = cadena.toUpperCase();  
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + "."); */


/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/*     3. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

/* var cadena = prompt("Introduce un Texto:");
    var numchar = cadena.length;
    var j;
    var car;
    var salida = "";
    for (j = 0; j < numchar; j++) {
        //recupera el caracter i del string.
        car = cadena.charAt(j);    
        salida = car + salida;
    }
    document.write(salida); */

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* 4. Realiza un juego de Piedra Papel Tijera contra Gana ARBI. */

var jugados = 0;
var ganados = 0;
var perdidos = 0;
do {
    var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
    //GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
    var aleatorio = Math.floor((Math.random() * 9) + 1);
    var elige = "";
    if (aleatorio <= 3) {
        elige = "piedra";
    }
    else if (aleatorio <= 6) {
        elige = "papel";
    }
    else {
        elige = "tijera";
    }

    if ((jugada == "piedra") && (elige == "piedra")) {
        alert(jugada+"-"+elige+": Empate");
    }
    else if ((jugada == "piedra") && (elige == "papel")) {
        alert(jugada+"-"+elige+": Gana ARBI");
        perdidos++;
    }
    else if ((jugada == "piedra") && (elige == "tijera")) {
        alert(jugada+"-"+elige+": Gana Jugador");
        ganados++;
    }
    else if ((jugada == "papel") && (elige == "papel")) {
        alert(jugada+"-"+elige+": Empate");
    }
    else if ((jugada == "papel") && (elige == "tijera")) {
        alert(jugada+"-"+elige+": Gana ARBI");
        perdidos++;
    }
    else if ((jugada == "papel") && (elige == "piedra")) {
        alert(jugada+"-"+elige+": Gana Jugador");
        ganados++;
    }
    else if ((jugada == "tijera") && (elige == "tijera")) {
        alert(jugada+"-"+elige+": Empate");
    }
    else if ((jugada == "tijera") && (elige == "piedra")) {
        alert(jugada+"-"+elige+": Gana ARBI");
        perdidos++;
    }
    else if ((jugada == "tijera") && (elige == "papel")) {
        alert(jugada+"-"+elige+": Gana Jugador");
        ganados++;
    }
    jugados++;

} while (confirm("Jugar de nuevo"));

document.write("Partidas jugadas: "+jugados+"<br>");
document.write("Partidas ganadas: "+ganados+"<br>");
document.write("Partidas perdidas: "+perdidos+"<br>");
document.write("Partidas empatadas: "+(jugados-ganados-perdidos));






























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