function calcular() {
  let   r1 = document.getElementById("respuesta1");
     let   r2 = document.getElementById("respuesta2");
      let   r3 = document.getElementById("respuesta3");

      let tEdad = document.getElementById("textoEdad").value;
        let edad = tEdad;

        let beber = edad >= 18;
        r1.textContent = beber;

        let ingresar = edad >= 18 && edad <=30;
        r2.textContent = ingresar;

        let gratis = edad == 18 || edad ==25;
        r3.textContent = gratis;
}