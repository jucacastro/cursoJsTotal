
/*function consultarPrecio(){
let elementoFruta = document.getElementById("numeroFruta").value;
let elementoprecio = document.getElementById("textoPrecio");
let  fruta = elementoFruta;

switch(fruta){
    case "1":{
        elementoprecio.textContent = "$2500";
        break;
    } 
    case "2":{
          elementoprecio.textContent = "$3500";
          break;
    }
    case "3":{
          elementoprecio.textContent = "$500";
          break;
    }
    case "4":{
          elementoprecio.textContent = "$1500";
          break;
    } 
    case"5":{
        elementoprecio.textContent = "$4000";
        break;
    }

}
}*/
function consultarPrecio(){
let elementoFruta = document.getElementById("numeroFruta").value;
let elementoprecio = document.getElementById("textoPrecio");


switch(elementoFruta){
    case "1":{
        elementoprecio.textContent = "$2500";
        break;
    } 
    case "2":{
          elementoprecio.textContent = "$3500";
          break;
    }
    case "3":{
          elementoprecio.textContent = "$500";
          break;
    }
    case "4":{
          elementoprecio.textContent = "$1500";
          break;
    } 
    case"5":{
        elementoprecio.textContent = "$4000";
        break;
    }

}
}