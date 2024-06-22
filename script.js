



/*function media() {
    const inputText = document.getElementById('miInput').value;
    const elementos = inputText.split(',').map(Number);
    let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total += elementos[i];
    }
    console.log(elementos)
    
    
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
    const inputText = document.getElementById('miInput').value;
    elementos = inputText.split(',').map(Number);
    let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total += elementos[i];
    }
    segundo();
}

function segundo() {
    console.log(elementos);
}


