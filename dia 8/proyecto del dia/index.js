let empleados = [];

function Empleado(nombre,apellido,edad,cargo,salario) {
    this.nombre= nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.salario = salario;
}


function crearEmpleado() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let cargo = document.getElementById("cargo").value;
    let salario = document.getElementById("salario").value;
    let nuevoEmpleado =  new Empleado(nombre,apellido,edad,cargo,salario);
    empleados.push(nuevoEmpleado);
    alert("empleado creado");
    limpiarCampos();

}

function mostrarEmpleados() {
    let listado = "";
    for (const empleado of empleados) {
        for(let prop in empleado){
            listado = listado + prop.toUpperCase()+ ": "+ empleado[prop] + ","
        }
     listado = listado + "\n"
    }
    alert(listado);
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("salario").value ="";
    
}