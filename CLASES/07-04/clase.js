  // funcion
/*   function sumar (num1,num2,num3,nombre) {
    document.write (` ${nombre} tu resultado es ${(num1 + num2 + num3)} <br>`);
                    
 }
  sumar (Number(prompt("numero1")),Number(prompt("numero2")),Number(prompt("numero3")),prompt("Escribe tu nombre"));  

  */
/*  ARROW FUNCTION:(funcion flecha) , se elimina la palabra function y se coloca la flecha luego de los parentesis */
//ejemplos  */
//si solamente usamos un parámetro no lleva paréntesis, y si tiene una sola expresión o línea de códigos NO LLEVA LLAVES

/*  let suma = (num1,num2,num3,nombre) => {` ${nombre} tu resultado es ${(num1 + num2 + num3)} <br>`}
 suma (Number(prompt("numero1")),Number(prompt("numero2")),Number(prompt("numero3")),prompt("Escribe tu nombre"));  

 */

/*  let sosMayor = (nombre , edad) => {
     if (edad>=18){
      document.write(`${nombre} sos mayor de edad`)
     }else {
        document.write(`${nombre} sos menor de edad`)
 }
 }
sosMayor(prompt ("decime tu nombre"), Number (prompt(nombre + "decime tu edad")));
 */



// WHILE
//es similar al if, pero sigue preguntando la condición todo el tiempo hasta que la condición sea falsa o demos break
/* 

let numero = Number(prompt ("ingresa un numero"));

while (numero<10){
     numero++ ;
    
     document.write(numero)

     } 
 */


// DO WHILE
//lo ejecuto y después pregunto

/* let numero= Number(prompt ("ingresa un numero"));

/* do {document.write
    (numero + " "); numero++; } 

    while (numero<=10)
 */ 


// REPASO WHILE
//break
let numero = Number (prompt ("ingresa tu numero"));

while (numero<100){
     numero++;
     document.write(`${numero} </br>`); 
     if (numero==10){
        break;
        
     }
 }
// //12345678910