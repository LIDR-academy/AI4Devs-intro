function invertirCadena() {

    var texto = document.getElementById('inputText').value;

    // Convertir la cadena a un array de caracteres
    let arrayDeCaracteres = texto.split('');
    
    // Invertir el array de caracteres
    let arrayInvertido = arrayDeCaracteres.reverse();
    
    // Convertir el array invertido de nuevo a una cadena
    let cadenaInvertida = arrayInvertido.join('');
    
    document.getElementById('textoInvertido').textContent = cadenaInvertida;
}