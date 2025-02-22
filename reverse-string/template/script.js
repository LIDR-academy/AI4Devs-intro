// Función para invertir la cadena y mostrar el resultado
document.getElementById('reverseBtn').addEventListener('click', () => {
    const input = document.getElementById('inputText').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = reversed;
});

// Función para copiar el resultado al portapapeles
document.getElementById('copyBtn').addEventListener('click', () => {
    const resultText = document.getElementById('result').textContent;
    if (resultText) {
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert('¡Copiado al portapapeles!');
            })
            .catch(err => {
                console.error('Error al copiar: ', err);
            });
    }
});
