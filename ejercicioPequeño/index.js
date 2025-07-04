function multiplicar(){
  let numeroTabla = document.getElementById("numeroTabla");
  let elementoNumero = Number(numeroTabla.value);
  
    let listaTabla = document.getElementById("listaTabla");
  for(i=1;i<=10;i++){
    let resultado = elementoNumero * i;
    textoResultado = elementoNumero + "*" + i + "es igual a"+ resultado;
     let itemLista = document.createElement("li");
    itemLista.innerHTML = textoResultado;
    listaTabla.appendChild(itemLista);
  }
  
}