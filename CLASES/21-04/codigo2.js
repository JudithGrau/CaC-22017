//objeto
//Notacion puntos
let auto={
    //propiedad(key) : valor
    marca : "Ford",
    modelo : "Focus",
    color : "gris",
    año : 2008,
    vtv : true,
    encender : function(){ //metodo
        return("auto encendido")
    }
}
//Notacion puntos

//reasigno un valor
auto.marca ="Chevrolet";
auto.modelo ="Corsa";

//agrego propiedades
auto.velocidad = "80km";
/* console.log(`Mi auto es un ${auto.modelo} año ${auto.año} y tiene una velocidad de ${auto.velocidad}`)// mi auto es un focus año 2008
console.log(auto.encender()) */

//Ejercicio en clase: Armar el objeto celular
let celular = {
    marca: "Nokia",
    modelo: "1100",
    color: "blanco",
    version: "1.5 plus",
    os: "Android",
    nfc: true,
    memoriaRam: 2,
    almacenamiento: 32,
    lanzamiento: 2003,
    encender
}
