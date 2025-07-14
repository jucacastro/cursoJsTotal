function recibirNumeroDelInput(elemento) {
    let venta = document.getElementById(elemento).value;
    let ElementoVenta = Number(venta);
    return ElementoVenta;
}   




function calcular() {
    let ventas1,ventas2, ventas3, ventas4, ventas5, ventas6;
    let parrafoSalida = document.getElementById("parrafoFinal");

    let venta1 = recibirNumeroDelInput("ventasTienda1");
    let venta2 = recibirNumeroDelInput("ventasTienda2");
    let venta3 = recibirNumeroDelInput("ventasTienda3");
    let venta4 = recibirNumeroDelInput("ventasTienda4");
    let venta5 = recibirNumeroDelInput("ventasTienda5");
    let venta6 = recibirNumeroDelInput("ventasTienda6");

    let sumaVentas = venta1 + venta2 + venta3 + venta4 + venta5 + venta6;

    parrafoSalida.textContent = sumaVentas;

    

}