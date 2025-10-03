let numeroEmpleados = 4;
let empleados = new Array();
let sueldosBruto = new Array();
let sueldosNetos = new Array();
for (i = 0; i < numeroEmpleados; i++) {
    let nombreEmpleado = prompt("Introduce el nombre del " + (i+1) + "º empleado");

    if (!nombreEmpleado) {
        throw new Error('Name Error');
    } else {
        empleados.push(nombreEmpleado);
        let horas = parseInt(prompt("Introduce las horas que trabajó " + nombreEmpleado + " Esta semana"));
        let pagoHora = parseFloat(prompt("Introduce el pago por hora del empleado " + nombreEmpleado));
        if (isNaN(horas) || !horas || isNaN(pagoHora) || !pagoHora) {
            throw new Error('Number Error or null');
        } else {
            let sueldoBruto;
            let horasExtra = (horas - 40) * pagoHora * 1.5;
            if (horas <= 40) {
                sueldoBruto = horas * pagoHora;
            } else if (horas > 40) {
                sueldoBruto = (pagoHora * 40) + horasExtra;
            }
            sueldosBruto.push(sueldoBruto);

            let impuesto;
            if (sueldoBruto > 1000) {
                impuesto = sueldoBruto * 0.10;
            } else {
                impuesto = sueldoBruto * 0.05;
            }

            let sueldoNeto = sueldoBruto - impuesto;

            sueldosNetos.push(sueldoNeto);

        }
        console.log(empleados);
        console.log(sueldosBruto);
        console.log(sueldosNetos);
    }
}

let eliminarEmpleado = prompt("Introduce el nombre del empleado que quiera eliminar, en caso contrario déjelo vacío: ");
let incluye = empleados.indexOf(eliminarEmpleado);
if (incluye !== -1) {
    delete empleados[incluye];
    delete sueldosBruto[incluye];
    delete sueldosNetos[incluye];
    console.log("Empleado: " + eliminarEmpleado + " se ha eliminado correctamente")
} else if (eliminarEmpleado == "") {
    console.log("No quiere eliminar ningún empleado");
} else {
    console.log("Empleado no encontrado")
}

for (i = 0; i < empleados.length; i++) {
    console.log("Empleado: " + empleados[i] + " Sueldo Bruto: " + sueldosBruto[i] + " Sueldo Neto: " + sueldosNetos[i]);
}