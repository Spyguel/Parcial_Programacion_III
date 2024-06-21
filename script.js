

function media() {
    const inputText = document.getElementById('miInput').value;
    const elementos = inputText.split(',').map(Number);
    let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total += elementos[i];
    }
    
    const res = total / elementos.length;
    document.write(res);
}

