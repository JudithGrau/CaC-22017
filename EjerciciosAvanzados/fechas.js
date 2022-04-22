/* Realiza un script que escriba en el documento la fecha y hora actual. La salida deberá tener elsiguiente formato:

Hoy es martes, 29 de Marzo de 2022 y son las 14:32 horas. */

/* let fecha = new Date();
console.log(fecha.getDay());
let diaNum = (fecha.getDate());
console.log(fecha.getMonth());
let anio = (fecha.getFullYear());


let diaSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
let dia = (diaSemana[fecha.getDay()]);

let mesAnyo = ['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Novienbre', 'Diciembre'];
let mes = (mesAnyo[fecha.getMonth()]);

let hora = new Date;
let horaActual = (hora.getHours());
let minutosActuales = (hora.getMinutes());

document.write(`Hoy es ${dia}, ${diaNum} de ${mes} de ${anio} y son las ${horaActual}:${minutosActuales} horas.`); */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* 2. Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos. La salida sería algo así como : En introducir Luís Perez Alonso ha tardado 25 segundos. */

//Guardamos la fecha actual
//var fecha1 = new Date();

//Obtenemos la fecha Unix (Milisegundos desde 1970 hasta el objeto fecha).
//ar tiempo1 = fecha1.getTime();

//Pedimos los datos por teclado
/* var nombre = prompt("Introduce el Nombre:");
var apellido1 = prompt("Introduce apellido 1:");
var apellido2 = prompt("Introduce Apellido 2:"); */

//Volvemos a guardar la fecha actual
//var fecha2 = new Date(); 

//Y obtenemos la fecha Unix de esa fecha
//var tiempo2 = fecha2.getTime(); 

//Calculamos el total entre la fecha 1 y la 2
//var total = (tiempo2 - tiempo1) / 1000;

//Le decimos que fije los decimales en 1
//total = total.toFixed(1);

//Imprimimos el resultado
//document.write("En introducir " + nombre + " " + apellido1 + " " + apellido2 + " ha tardado " + total + " segundos.");


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*     3. Realiza un script pida un mes y año e imprima su calendario. No hace falta esmerarse en la presentación del calendario, el calendario simplificado puede ser del tipo:

OCTUBRE – 2022
1 (miercoles), 2 (jueves), ….. , 31 (viernes). */

//PEDIMOS EL MES Y EL AÑO EN NÚMERO
var mes = Number(prompt("Introduce Mes"));
var ano = Number(prompt("Introduce Año"));
//RESTAMOS 1 AL MES PORQUE EN JAVASCRIPT VAN DE 0-11
mes = mes - 1;

//CREAMOS UN OBJETO FECHA CON LOS DATOS
var fecha = new Date(ano, mes);
var vardia = fecha.getDay();    //getDay() devuelve el dia de la semana.(0-6).

//CALCULAMOS EL NOMBRE DEL MES SEGÚN EL NÚMERO
switch (mes) {  //Algoritmo para saber el nombre del mes.
    case 0:
        mesletras = "Enero";
        break;
    case 1:
        mesletras = "Febrero";
        break;
    case 2:
        mesletras = "Marzo";
        break;
    case 3:
        mesletras = "Abril";
        break;
    case 4:
        mesletras = "Mayo";
        break;
    case 5:
        mesletras = "Junio";
        break;
    case 6:
        mesletras = "Julio";
        break;
    case 7:
        mesletras = "Agosto";
        break;
    case 8:
        mesletras = "Septiembre";
        break;
    case 9:
        mesletras = "Octubre";
        break;
    case 10:
        mesletras = "Noviembre";
        break;
    case 11:
        mesletras = "Diciembre";
        break;
}
//iMPRIMIMOS EL TÍTULO CON EL NOMBRE DEL MES Y EL AÑO
document.write("<h1>" + mesletras + " de " + ano + "</h1>");

//HACEMOS UN BUCLE QUE SE REPITA MIENTRAS EL MES NO CAMBIE
while (fecha.getMonth() == mes) {

    //CALCULAMOS EL DIA DE LA SEMANA SEGÚN EL NÚMERO
    switch (fecha.getDate()) { //Algoritmo para calcular el dia según el número.
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
    }
    //IMPRIMIMOS EL DÍA Y EL DIA DE LA SEMANA
    document.write(fecha.getDate() + "(" + dia + ")<br>");

    //SUMAMOS 1 DÍA AL OBJETO FECHA
    fecha.setDate(fecha.getDate() + 1);
}