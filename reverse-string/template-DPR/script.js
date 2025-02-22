// Actualiza el resultado y la visibilidad del botón Copy según la longitud del texto
function updateResultVisibility() {
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');
    const copyButton = document.getElementById('copyBtn');

    if (inputText.trim().length <= 3) {
        resultElement.textContent = "";
        copyButton.style.display = "none";
    } else {
        resultElement.textContent = inputText.split('').reverse().join('');
        copyButton.style.display = "inline-block";
    }
}

// Copia el contenido del resultado al portapapeles
function copyResultToClipboard() {
    const resultText = document.getElementById('result').textContent;
    if (resultText) {
        navigator.clipboard.writeText(resultText)
            .then(() => alert('¡Copiado al portapapeles!'))
            .catch(err => console.error('Error al copiar: ', err));
    }
}

document.getElementById('inputText').addEventListener('input', updateResultVisibility);
document.getElementById('copyBtn').addEventListener('click', copyResultToClipboard);
