function recibirNumeroDelInput(elemento) {
    let ElementoVenta = Number(elemento.value);
    return ElementoVenta;
}   




function calcular() {
    let ventas = [];
    let posicionVentas = 0;
    let elementoContenedor = document.getElementById("itemsTiendas")

    for (let item of elementoContenedor.children) {
        let elementoInput = recibirNumeroDelInput(item.children[1]);
        ventas[posicionVentas] = elementoInput;
       posicionVentas++;
        
    } 

     let sumaVentas = suma(ventas);
    let mayorVenta = mayorVentas(ventas);
    let menorVenta = menorVentas(ventas);

    for (let item of elementoContenedor.children) {
        let elementoInput = recibirNumeroDelInput(item.children[1]);

         item.children[1].className = "parrafoNeutro    ";
       
        if(elementoInput == mayorVenta){
            item.children[1].className = "inputMayor";
        }
        if(elementoInput == menorVenta){
            item.children[1].className = "inputMenor";
        }
        
    }


     let parrafoSalida = document.getElementById("parrafoFinal");

    parrafoSalida.textContent = "el total de ventas es : " + sumaVentas 
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


function crearParrafoTienda(textoLabel,valorMin) {
    //crear las etiquetas de parrafo <p>
    let elementoParrafo = document.createElement("p");
    //crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con el input
    elementoEtiqueta.setAttribute("for",textoLabel);
    
    //crear el input 
    let elementoInput = document.createElement("input");

    //establecer atributos al input 
    elementoInput.setAttribute("type","number");
      elementoInput.setAttribute("id",textoLabel);
        elementoInput.setAttribute("min",valorMin);
          elementoInput.setAttribute("value",0);

          //agregar label e input al parrafo
          elementoParrafo.appendChild(elementoEtiqueta);
          elementoParrafo.appendChild(elementoInput);

          //devolver el parrafo completo
          return elementoParrafo;
}


function crearTiendas(contenedorId,min,cantidadTiendas) {
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorId);
    //loop para crear tiendas como se pidan
    for(let conteoTiendas=1;conteoTiendas<=cantidadTiendas;conteoTiendas++){

        //crear el texto label para poder llamar a la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //crear tiendas con crearParrafoTiendas
        let parrafoTienda = crearParrafoTienda(textoEtiqueta,min);  

        //agregar parrafo al contenedor

        elementoContenedor.appendChild(parrafoTienda);
    }
 
}



