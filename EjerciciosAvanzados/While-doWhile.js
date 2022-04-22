//Ejercicio 1
//Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
/* 0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

/* //BUCLE PARA QUE PERMITA INTRODUCIR MÁS DE UNA NOTA
do {
	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
	var nota = prompt("Introduce tu nota");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(nota) == nota) {
		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		//SI LA NOTA NO ES ENTRE 0 Y 10
		else {
			alert("Nota erronea");
		}
	}
	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
	}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
} while (nota != undefined);	//Undefined es cuando se pulsa Cancelar. */


/* -------------------------------------------------------------------------------------------------------------------------------------------- */
//Ejercicio 2
/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

/* //DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
var resultado = "";
//BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    //PEDIMOS LA CADENA POR TECLADO
    var cadena = prompt("Introduce una cadena");
    //SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        //CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + cadena;
    }
    //SINÓ
    else {
        //CONCATENAMOS CON GUIÓN
        resultado = resultado + "-" + cadena;
    }
    //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));
//SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
document.write(resultado); */

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
//Ejercicio 3
/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

//DECLARAMOS LA VARIABLE SUMA
var suma = 0;
//BUCLE DO WHILE PARA INTRODUCIR VARIOS
do {
    //PEDIMOS EL NÚMERO POR TECLADO
    var numero = prompt("Introduce un numero");
    //COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
    if (Number(numero) == numero) {
        //CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
        numero = Number(numero);
        //SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
        suma = suma + numero;
    }
    //SI LO INTRODUCIDO NO ES UN NÚMERO
    else {
    //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
//VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
} while (numero != undefined);
//SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
document.write(suma);