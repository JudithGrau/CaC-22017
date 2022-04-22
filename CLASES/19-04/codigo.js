//Array. - Matriz - Arreglo.

/* let nombre = "juancito";
document.write(nombre.length) */
                         
//.length  = elementos     1      2          3         4       5         6 
let nombreEstudiantes = ["Juan", "Marcos", "Agostina", "Leon","Franco","Nadia"];
 //indice                 //0   , 1    ,     2      , 3      ,  4   ,    5 , 

/* document.write (nombreEstudiantes[1]) //indice */

nombreEstudiantes[0] = "Pepe";   //reasigno un elemento (por su indice)

/* document.write (nombreEstudiantes); */

/* `.push` agrega un elemento al final de la matriz, incrementando su longitud en 1. `.push` devuelve la nueva longitud. */

nombreEstudiantes.push ("Victoria");
/* ["Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia","Victoria"]; */

/* `.pop` elimina el último elemento de la matriz, disminuyendo la longitud en 1. `.pop` devuelve el elemento "reventado" (_popped_). */

nombreEstudiantes.pop();
/* ["Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia"]; */

/* `.unshift(item)` colocará un nuevo elemento en la primera posición de la matriz */
nombreEstudiantes.unshift("Juan");

/* ["Juan", Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia"] */

nombreEstudiantes.shift();
/* ["Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia"] */

nombreEstudiantes.push(10);
/* ["Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia",10] */
nombreEstudiantes.unshift(true);

/* [true,"Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia",10] */
nombreEstudiantes[7] = "Santiago";
/* [true,"Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia","Santiago"] */

nombreEstudiantes.shift();

/* ["Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia","Santiago"] */
nombreEstudiantes.push ("Victoria", "Nicolas","Silvia","Mauricio");
/* ["Pepe", "Marcos", "Agostina", "Leon","Franco","Nadia","Santiago","Victoria", "Nicolas","Silvia","Mauricio"] */
/* document.write (nombreEstudiantes);  */
/* document.write(nombreEstudiantes[nombreEstudiantes.length-1]) ; */ //ultimo elemento de un array

               //   0        1               2
                             //        0      1              2
                                                    //   0         1
let tecnologia = ["Juan", "Marcos", ["React","Angular",["Marvel","DC"]]];                   
/* document.write( tecnologia[2][2][1]) */

               //    0              1   2   3  
                    //0, 1     
let peliculas = [["DC", "marvel"], 1, 3, "juan"];


             // 0    1        2            3        4       5
let nombre = ["Juan", "Marcos", "Agostina", "Leon","Franco","Nadia"];  
 //Inicio contador  //condicion               //aumento o decremento
for (let i = 0; i < nombre.length; i++) {
  document.write(nombre[i]);
}