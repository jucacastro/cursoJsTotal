

function multiplicacion() {
    //obtener el numero 
    let elementoNumero = document.getElementById("numeroTabla");
    let textoNumero = Number(elementoNumero.value);
    //obtener la tabla
    let elementoLista = document.getElementById("listaTabla");
    //producir y mostrar resultados
    for( i=1;i<=10;i++){
        let numeroResultado = textoNumero * i;
        let resultado = textoNumero + "* " + i + " es igual a " + "= " + numeroResultado;
        let itemLista = document.createElement("li");
        itemLista.innerHTML = resultado;
        elementoLista.appendChild(itemLista)


    }

  
}