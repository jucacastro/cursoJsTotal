function recomendar(genero) {
   let edad = document.getElementById("edadUsuario").value;
   let recomendarPelicula = document.getElementById("recomendacionPelicula");
  
switch (genero) {
    case 'comedia':
        if(edad < 13){
            recomendarPelicula.textContent = "mi pequeño angelito";
        }else{
            if(edad <16){
                 recomendarPelicula.textContent = "scary movie"; 
            }else{
                  recomendarPelicula.textContent = "american pie"; 
            }
        }
        break;
    case 'drama':
         if(edad < 13){
            recomendarPelicula.textContent = "marcelino pan y vino";
        }else{
            if(edad <16){
                 recomendarPelicula.textContent = "La vida secreta de Walter Mitty"; 
            }else{
                  recomendarPelicula.textContent = "infidelidad"; 
            }
        }
        break;
    case 'musical':
         if(edad < 13){
            recomendarPelicula.textContent = "intocable";
        }else{
            if(edad <16){
                 recomendarPelicula.textContent = ""; 
            }else{
                  recomendarPelicula.textContent = "the greatest show"; 
            }
        }
        break;
    case 'crimen':
         if(edad < 13){
            recomendarPelicula.textContent = "mi pequeño angelito";
        }else{
            if(edad <16){
                 recomendarPelicula.textContent = "scary movie"; 
            }else{
                  recomendarPelicula.textContent = "american pie"; 
            }
        }
        break;
    
}

}