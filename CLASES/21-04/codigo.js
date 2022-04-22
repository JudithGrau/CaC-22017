// Objeto
//Notacion puntos

let auto = {
    // propiedad (key) : valor
        marca : "Ford",
        modelo: "Focus",
        color: "gris",
        año: 2008,
        vtv : true,
        encender : function (){    //metodo
            return "auto encendido"
        },
        apagar : () => {        //flecha
            return "auto apagado"
        },
    }
    console.log(auto.apagar()) // auto apagado
for (let valor in auto){
    console.log(valor)
    console.log(auto[valor]);
}







 /*    auto.aire = true
console.log(auto)
console.log(auto.encender())
console.log (`mi auto es un ${auto.marca} tiene aire? ${auto.aire}`)

//reasigno
auto.marca = "Chevrolet";
auto.modelo = "Corsa";

delete auto.marca

auto.marca= "ford";
auto.velocidad = "80km";
auto.aire = true
 */