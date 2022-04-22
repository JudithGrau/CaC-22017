/* Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.
*/

/* function masIva(precio, iva){
    iva = iva || 21
    var coniva = (precio + precio*iva/100);
    return coniva;
}
var precio = Number(prompt("Introduce un precio"));
var iva = Number(prompt("Introduce el iva"));
if(iva > 0){
var resultado = masIva(precio, iva);
}
else{
var resultado = masIva(precio);
}
document.write("Precio sin iva: " + precio);
document.write("<br>Precio más Iva: " + resultado); */


/* Crea una función que reciba un texto y lo devuelva al revés */

function voltear(texto){
    var caracter = "";
    var salida = "";
    for(var i=0; i < texto.length; i++){
    caracter = texto.charAt(i);
    salida = caracter + salida;
}
return salida;
}

var texto = prompt("Introduce un texto");
var reves = voltear(texto);
document.write(`Texto original: ${texto} <br>`);
document.write(`Texto al revés: ${reves}`);

