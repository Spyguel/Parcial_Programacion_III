
function verificar() {
    inputText = document.getElementById('miInput').value;
    const regla = /^(\d+,)+\d+$/;
    if (regla.test(inputText)) {
        elementos = inputText.split(',').map(Number);
    } else {
        document.getElementById('alerta').innerHTML = "Debe ingresar un conjunto de datos. por ejemplo: '1,2,3,4'";
        document.getElementById('resultado').style.visibility = "hidden";
    }
}

function media() {
    verificar();
    if (elementos.length === 0) return;
    document.getElementById('miInput').value = null; 
    
    let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total += elementos[i];
    }

    const resMedia = total / elementos.length;
    limpiar()
    document.getElementById('media').innerHTML = "Media: " + resMedia;
    document.getElementById('resultado').style.visibility = "visible";
    elementos.length = 0
}

function moda() {
    verificar();
    if (elementos.length === 0) return;
    document.getElementById('miInput').value = null; 
    
    let variable = 0, contador = 0, cuenta = 0;
    elementos.map(p => {
        cuenta = 0;
        elementos.map(x => {
            if (p == x) { cuenta++; }
        });
        if (cuenta > contador) {
            contador = cuenta;
            variable = p;
        }
    });
    limpiar()
    document.getElementById('moda').innerHTML = "Moda: " + variable;
    document.getElementById('resultado').style.visibility = "visible";
    elementos.length = 0
}
function mediana(){
    verificar()
    if (elementos.length === 0) return;
    document.getElementById('miInput').value = null; 
    elementos.sort((x, y) => x - y);
    let mitad = Math.floor(elementos.length /2)

    const resMediana = elementos.length % 2 === 1
    ? elementos[mitad]
    : (elementos[mitad - 1] + elementos[mitad]) / 2;

    limpiar()
    document.getElementById('mediana').innerHTML = "Mediana: "+resMediana
    document.getElementById('resultado').style.visibility = "visible"
    elementos.length = 0
}

function limpiar() {
    document.getElementById('moda').innerHTML = "" 
    document.getElementById('media').innerHTML = ""
    document.getElementById('mediana').innerHTML = ""
}