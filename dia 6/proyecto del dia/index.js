let notas = [4,3,5,3,4]

function verNotas() {
    let lista = document.getElementById("listaNotas");
    for (let  num of notas) {
        let elementoNotas = document.createElement("li")
        elementoNotas.innerText = num;
        lista.appendChild(elementoNotas)
    }
} 
    


function verPromedio() {
    
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        suma += notas[i];
        
    }
    let promedio = (suma/5);
    document.getElementById("promedioNotas").textContent = promedio;
}

function verNotaAlta() {
    let notaAlta = 0;
    let i = 0;
    while (i<5) {
        if(notas[i]>notaAlta){
            notaAlta = notas[i];
        }
        i++;
    }
    document.getElementById("notaMasAlta").textContent = notaAlta;
}

function reprobo() {
    let reprobo = "no";
    let i = 0;
    do {
        if(notas[i] < 3){
            reprobo="si";
            break;
        }
        i++;
    } while (i<5);

    document.getElementById("reprobo").textContent = reprobo;
}