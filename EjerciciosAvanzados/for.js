//Ejercicio1
/* 1. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666 */

//DECLARAMOS LAS VARIABLES    
//var i, rep;

//BUCLE FOR PARA RECORRER DE 1 A 30
//for (i = 1; i <= 30; i++) {

    //BUCLE INTERIOR PARA HACER LAS REPETICIONES
    //for (rep = 0; rep < i; rep++) {
        
        //IMPRIMIMOS EL NÚMERO i, i VECES
        //document.write(i);
    //}

    //IMPRIMIMOS UN SALTO DE LÍNEA
    //document.write("<br>");
//}
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */

//Ejercicio2
/* 2. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22 */

//PEDIMOS EL NÚMERO POR TECLADO
//var numrep = prompt("Introduce numero de repeticiones");

//SI LO INTRODUCIDO ES UN NÚMERO
//if (Number(numrep) == numrep) {

    //SI ES UN NÚMERO ENTRE 1 Y 50
    /* if (numrep > 0 && numrep <= 50) {
        var rep,i; */

        //BUCLE QUE VA DESDE numrep HASTA 1
        /* for (i = numrep; i >= 1; i--) {
            
            //BUCLE DESDE i HASTA 1
            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
} */

/* ----------------------------------------------------------------------------------------------------------------------------------------------- */

//Ejercicio3
/* 3. Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) :

1
12
123
1234
12345
123456
 */

//PEDIMOS EL NÚMERO POR TECLADO
//var numrep = prompt("Introduce numero de repeticiones");

//SI LO INTRODUCIDO ES UN NÚMERO
//if (Number(numrep) == numrep) {

    //SI ES UN NÚMERO ENTRE 1 Y 50
    /* if (numrep > 0 && numrep <= 50) {
        var rep,i; */

        //BUCLE QUE VA DESDE 0 HASTA numrep
        //for (i = 0; i <=numrep; i++) {

            //BUCLE DESDE 1 HASTA i
            /* for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
} */
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */

//Ejercicio4
/* 4. Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
 */

//IMPRIMOS UNA LÍNEA HORIZONTAL   
document.write("<hr>");
//DECLARAMOS LAS VARIABLES
var i;
var j = 500;
var rep = 0;
//BUCLE DESDE 1 HASTA j
for (i = 1; i <= j; i++) {
    //IMPRIMIMOS EL NÚMERO i
    document.write(i);
    //SI EL RESTO DE DIVIDIR i/4 ES IGUAL A 0
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    //SI EL RESTO DE DIVIDIR i/9 ES IGUAL A 0
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    //IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
    //SI ES MÚLTIPLO DE 5 IMPRIMIMOS UNA LÍNEA HORIZONTAL
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}
/* ----------------------------------------------------------------------------------------------------------------------------------------------- */

//Ejercicio5
/* 5. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

//DECLARAMOS LAS VARIABLES
var i,j;
//PEDIMOS POR TECLADO EL NÚMERO DE FILAS
//Number fuerza a que se introduzca un número
var filas = Number(prompt("Introduce numero de filas"));
//PEDIMOS EL NÚMERO DE COLUMNAS
var colum = Number(prompt("Introduce numero de columnas"));
//MULTIPLICAMOS filas * columnas Y GUARDAMOS EL RESULTADO EN res
var res = filas * colum;
//COMENZAMOS A IMPRIMIR LA TABLA
document.write("<table border>");
//BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
for (i = 0; i < filas; i++) {
    //EN CADA FILA ESCRIBIMOS UN <tr> PARA COMENZAR LA FILA
    document.write("<tr>");
    //BUCLE DESDE 0 HASTA EL NÚMERO DE COLUMNAS
    for (j = 0; j < colum; j++) {
        //EN CADA UNA ESCRIBIMOS UN <td> PARA COMENZAR UNA CELDA
        document.write("<td>");
        //LUEGO ESCRIBIMOS EL VALOR DE res
        document.write(res);
        //LE RESTAMOS 1 A res
        res--;
        //Y ESCRIBIMOS UN </td> PARA CERRAR LA CELDA
        document.write("</td>");
    }
    //ESCRIBIMOS UN </tr> PORQUE SE TERMINÓ LA FILA
    document.write("</tr>");
}
//Y POR ÚLTIMO CERRAMOS LA TABLA CON </table>
document.write("</table>");