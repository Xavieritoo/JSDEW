let Numeroempleados = 5;
let empleados =new Array(); 
for(i=0;i<Numeroempleados;i++){
    let nombreEmpleado = prompt("Introduce el nombre de esos "+Numeroempleados+" empleados");
    empleados.push(nombreEmpleado);
    let horas = prompt("Introduce las horas que trabajó "+nombreEmpleado+" Esta semana");
    let pagoHora = prompt("Introduce el pago por hora del empleado "+nombreEmpleado);
}
let sueldoBruto;
let horasExtra = (horas - 40) * pagoHora * 1.5;
if (horas <= 40){
    sueldoBruto = horas * pagoHora;
} else if(horas > 40){
    sueldoBruto = (pagoHora * 40) + horasExtra;
}
let impuesto;