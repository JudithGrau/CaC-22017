//ej.1
var btn1= document.getElementById("button-01");
btn1.addEventListener("click", function(){
    let nombre = prompt("Ingrese una palabra");
    function myFunction1() {
        return document.write(nombre.length);
    }
    var rta_1= document.getElementById("rta1");
    rta_1.innerHTML = myFunction1();
})

//ej.2
var btn2= document.getElementById("button-02");
btn2.addEventListener("click", function(){
    let cadena = prompt("Ingrese una palabra");
    function myFunction2() {
        return document.write(cadena.substring(0,4));
    }
    var rta_2= document.getElementById("rta2");
    rta_2.innerHTML = myFunction2();
})

//ej.3
var btn3= document.getElementById("button-03");
btn3.addEventListener("click", function(){
    let mensaje = prompt("Ingrese una palabra");
    // let arr= mensaje.split(' ');

    function myFunction3() {
        return document.write("[" + (mensaje.split(' ')) + "]" );
    }
    var rta_3= document.getElementById("rta3");
    rta_3.innerHTML = myFunction3();
})

//ej.4
var btn4= document.getElementById("button-04");
btn4.addEventListener("click", function(){
    let cadena2 = prompt("Ingrese una palabra");
    function myFunction4() {
        return document.write(cadena2.repeat(3,' '));
    }
    var rta_4= document.getElementById("rta4");
    rta_4.innerHTML = myFunction4();
})