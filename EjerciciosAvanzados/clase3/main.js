//` ` 

//Ejercicio 1a
math1= (Math.random());
/* document.write(`<b>Número random o aleatorio:</b> ${math1} <br>`); */
function agregar_rta1a(){                
    let text = document.createTextNode(math1);                                    
    document.getElementById("rta1a").appendChild(text); 
}

//Ejercicio 1b
math2= Math.floor(Math.random() * (75-25+1)) + 25;
/* document.write(`<b>Número aleatorio entre 25 y 75:</b> ${math2}`); */
function agregar_rta1b(){                
    let text = document.createTextNode(math2);                                    
    document.getElementById("rta1b").appendChild(text); 
}

//Ejercicio 2a
math3= Math.floor(Math.random() * (7 - 5 + 1)) + 5;
function agregar_rta2a(){                
    let text = document.createTextNode(math3);                                    
    document.getElementById("rta2a").appendChild(text); 
}
//Ejercicio 2b
let nombre= "Judith";
let posicionLetra= parseInt(
    Math.floor(Math.random() * (nombre.length - 0 + 1 + 0))
);
let letra= nombre.charAt(posicionLetra);
letra_aleatoria= document.write(letra);

function agregar_rta2(){
    let text = document.createTextNode(letra);
    document.getElementById("rta2").appendChild(text);
}














