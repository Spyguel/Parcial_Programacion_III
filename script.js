



/*function media() {
    const inputText = document.getElementById('miInput').value;
    const elementos = inputText.split(',').map(Number);
    let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total += elementos[i];
    }
    
    
    const resMedia = total / elementos.length;


    document.getElementById('media').innerHTML = resMedia

    elementos.sort((x, y) => x - y);
    let mitad = Math.floor(elementos.length /2)
    console.log(elementos.length)

    const resMediana = elementos.length % 2 === 1
    ? elementos[mitad]
    : (elementos[mitad - 1] + elementos[mitad]) / 2;
  
    document.getElementById('mediana').innerHTML = resMediana

}*/


function arreglo(segundo) {
    inputText = document.getElementById('miInput').value;
    elementos = inputText.split(',').map(Number);
    console.log(elementos)
    segundo();
}



function segundo(){
    
    let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total += elementos[i];
    }
    
    
    const resMedia = total / elementos.length;


    document.getElementById('media').innerHTML = "Media: "+resMedia

    let variable = 0, contador = 0, cuenta = 0
    elementos.map(p => {
        cuenta = 0
        elementos.map(x => {
            if (p == x) { cuenta++ }
        })
        if (cuenta > contador) {
            variable = p;
        }
    });

    document.getElementById('moda').innerHTML = "Moda: " +variable


    elementos.sort((x, y) => x - y);
    let mitad = Math.floor(elementos.length /2)
    console.log(elementos.length)

    const resMediana = elementos.length % 2 === 1
    ? elementos[mitad]
    : (elementos[mitad - 1] + elementos[mitad]) / 2;
  
    document.getElementById('mediana').innerHTML = "Mediana: "+resMediana

    document.getElementById('resultado').style.visibility = "visible"

}
