let categoria = prompt("Ingrese la categoría del empleado: repositor- cajero- supervisor");
let sueldo_repositor = Number(15890) + Number(15890)*0.1 ;
let sueldo_cajero = parseFloat(25630.89);
let sueldo_supervisor = parseFloat(35560.20) - (parseFloat(35560.20)*0.11);


if(categoria == "repositor"){
    alert("El sueldo del repositor es: $ " +  Number(sueldo_repositor));
}
else if(categoria == "cajero"){
    alert("El sueldo del cajero es: $ " + sueldo_cajero);
}
else if(categoria == "supervisor"){
    alert("El sueldo del supervisor es: $ " + Math.round(sueldo_supervisor,2));
}
else{
    alert("Ingrese una categoría valida!")
}