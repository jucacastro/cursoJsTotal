
function mostrarEnPantalla(resultado){
    let resultadoFinal = document.getElementById("resultadoFinal"); 
    resultadoFinal.value = resultado;

}


function suma() {
   let num1 = +document.getElementById("num1").value;
   let num2 = +document.getElementById("num2").value;
   mostrarEnPantalla(num1+num2);
}

function restar() {
  let num1 = +document.getElementById("num1").value;
   let num2 = +document.getElementById("num2").value;
   mostrarEnPantalla(num1-num2);
}

function division() {
  let num1 = +document.getElementById("num1").value;
   let num2 = +document.getElementById("num2").value;
   mostrarEnPantalla(num1/num2)
}


function multiplicacion() {
   let num1 = +document.getElementById("num1").value;
   let num2 = +document.getElementById("num2").value;
   mostrarEnPantalla(num1*num2)
}


function potencia() {
      let num1 = +document.getElementById("num1").value;
   let num2 = +document.getElementById("num2").value;
   mostrarEnPantalla(Math.pow(num1,num2))
}

function raiz() {
     let num1 = +document.getElementById("num1").value;
       mostrarEnPantalla(Math.sqrt(num1))
}

function absoluto() {

 let num1 = +document.getElementById("num1").value;
       mostrarEnPantalla(Math.abs(num1))
    
}

function random() {
     let minimo = +document.getElementById("num1").value;
      let maximo = +document.getElementById("num2").value;
      maximo= maximo +1;
      mostrarEnPantalla(Math.floor(Math.random()*(maximo-minimo)+minimo));
}


function round() {
     let resultado = +document.getElementById("resultadoFinal").value;
     mostrarEnPantalla(Math.round(resultado));
}



    function floor() {
    let resultado = +document.getElementById("resultadoFinal").value;
    mostrarEnPantalla(Math.floor(resultado));
}




function ceil() {
     let resultado = +document.getElementById("resultadoFinal").value;
    mostrarEnPantalla(Math.ceil(resultado));

}


    function limpiarCampos() {
        let numero1 = document.getElementById("num1").value = "";
      let numero2 = document.getElementById("num2").value = "";
   let resultado = document.getElementById("resultadoFinal").value = "";

}

function sumar(num1,num2) {
   return num1+num2;
   
}


/*
0*(51-1)+1=1
0.99*(51-1)+1=50.5 redondeado hacia abajo es 50
es decir cumple*/
