//arrays
/* let nombre = "juancito";
document.write(nombre.length) */ //8

let nombreEstudiantes = ["Juan","Marcos","Agostina", "Leon","Franco","Nadia"];

//length = elementos
//document.write(nombreEstudiantes.length);

//por indice=Leon
//document.write(nombreEstudiantes[3]); 

//accedo al ultimo indice
//document.write(nombreEstudiantes[nombreEstudiantes.length-1]); //Franco

//reasigno un valor
nombreEstudiantes[0]= "Pepe"
/* document.write(nombreEstudiantes[0]);

document.write(nombreEstudiantes); */

//otros metodos push/pop
// Push=Agrega un elemento al final del array 
nombreEstudiantes.push("Victoria");
/* document.write(nombreEstudiantes);  *///Juan,Marcos,Agostina,Leon,Franco,Nadia,Victoria

//Pop= elimina el ultimo elemento del array
nombreEstudiantes.pop();
/* document.write(nombreEstudiantes); */

//unshift=Agrega un elemento al inicio
nombreEstudiantes.unshift("Juan");
/* document.write(nombreEstudiantes); */

//shift=Elimina un elemento al inicio
nombreEstudiantes.shift();
/* document.write(nombreEstudiantes); */

nombreEstudiantes.push(10);
nombreEstudiantes.unshift(true);
nombreEstudiantes[nombreEstudiantes.length-1]= 100;
nombreEstudiantes[7] = "Santiago";
nombreEstudiantes.shift();
//document.write(nombreEstudiantes);

//Array bidimencional
let tecnologia = ["Juan","Marcos",["React","Angular",["Marvel","Dc"]]];
//document.write(tecnologia[2][2][0]);

let peliculas = [["dc", "marvel"],1,3,"juan"];
//document.write(peliculas[0][0]);

//ciclo For
let nombres = ["Juan","Marcos","Agostina", "Leon","Franco","Nadia"];
for(let i = 0; i < nombres.length; i++){
    document.write(nombreEstudiantes[i]);
}


