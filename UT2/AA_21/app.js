let Numeroempleados = 2;
let empleados = new Array();
let sueldosBruto = new Array();
let sueldosNetos = new Array();
for (i = 0; i < Numeroempleados; i++) {
    let nombreEmpleado = prompt("Introduce el nombre de esos " + Numeroempleados + " empleados");
    let horas = parseInt(prompt("Introduce las horas que trabajó " + nombreEmpleado + " Esta semana"));
    let pagoHora = parseFloat(prompt("Introduce el pago por hora del empleado " + nombreEmpleado));

    let sueldoBruto;
    let horasExtra = (horas - 40) * pagoHora * 1.5;
    if (horas <= 40) {
        sueldoBruto = horas * pagoHora;
    } else if (horas > 40) {
        sueldoBruto = (pagoHora * 40) + horasExtra;
    }

    let impuesto;
    if (sueldoBruto > 1000) {
        impuesto = sueldoBruto * 0.10;
    } else {
        impuesto = sueldoBruto * 0.05;
    }

    let sueldoNeto = sueldoBruto - impuesto;

    empleados.push(nombreEmpleado);
    sueldosBruto.push(sueldoBruto);
    sueldosNetos.push(sueldoNeto);

}
console.log(empleados);
console.log(sueldosBruto);
console.log(sueldosNetos); 
