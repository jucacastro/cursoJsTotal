

    function calcularLitros() {

        let elementoKm = parseInt(document.getElementById("textKm").value);
        let elementoResultado = document.getElementById("textoResultado");
        
        let resultadoFinal = Math.round(elementoKm/8.8);

       elementoResultado.textContent = "la cantidad de litros consumidos fue de " + resultadoFinal;
        
    }
