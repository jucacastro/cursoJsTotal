function evaluarCompra() {
   let elementoRespuesta = document.getElementById("decision");
   let  elementoPrecio = document.getElementById("textoPrecio").value;
    let precio = elementoPrecio;

    if (precio < 5) {
        elementoRespuesta.textContent = "comprar dos cartones de leche";
    }
}