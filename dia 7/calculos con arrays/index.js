function recibirNumeroDelInput(elemento) {
    let venta = document.getElementById(elemento).value;
    let ElementoVenta = Number(venta);
    return ElementoVenta;
}   




function calcular() {
    let ventas = [];
    let parrafoSalida = document.getElementById("parrafoFinal");


     ventas[0] = recibirNumeroDelInput("ventasTienda1");
     ventas[1] = recibirNumeroDelInput("ventasTienda2");
     ventas[2] = recibirNumeroDelInput("ventasTienda3");
     ventas[3] = recibirNumeroDelInput("ventasTienda4");
     ventas[4] = recibirNumeroDelInput("ventasTienda5");
     ventas[5] = recibirNumeroDelInput("ventasTienda6");

     let sumaVentas = suma(ventas);
    let mayorVenta = mayorVentas(ventas);
    let menorVenta = menorVentas(ventas);

    parrafoSalida.textContent = "el total de ventas es : " + sumaVentas 
     + ", la mayor venta es : " + mayorVenta 
     + " y la menor venta es" + menorVenta
}


function suma(array) {
    let total = 0;

    for (let venta of array) {
        total = total + venta;   
    }
    return total;
}


function mayorVentas(array) {
     let maximo = array[0];
     for (let venta of array) {
         if(venta > maximo){
            maximo = venta;
         }
         
     }
     return maximo;
}


function menorVentas(array) {
        let minimo = array[0];

     for (let venta of array) {
         if(venta < minimo){
            minimo = venta;
         }
         
     }
     return minimo;
}

