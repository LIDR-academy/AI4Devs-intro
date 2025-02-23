// script.js
function reverseString(str) {
    return str.split('').reverse().join('');
}

function updatePreviewAndButton() {
    const textInput = document.getElementById('textInput');
    const reverseButton = document.getElementById('reverseButton');
    const errorMessage = document.getElementById('errorMessage');
    const previewText = document.getElementById('previewText');
    
    // Obtener el texto y eliminar espacios en blanco al inicio y final
    const text = textInput.value.trim();
    
    // Actualizar la vista previa
    if (text) {
        previewText.textContent = reverseString(text);
    } else {
        previewText.textContent = '-';
    }
    
    // Mostrar/ocultar botón y mensaje de error basado en la longitud del texto
    if (text.length >= 3) {
        reverseButton.style.display = 'inline-block';
        errorMessage.style.display = 'none';
    } else {
        reverseButton.style.display = 'none';
        errorMessage.style.display = text.length > 0 ? 'block' : 'none';
    }
}

function processText() {
    const textInput = document.getElementById('textInput');
    const text = textInput.value.trim();
    
    // Validar el texto (longitud mínima de 3 caracteres)
    if (text.length < 3) {
        return;
    }
    
    const tableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    
    // Crear nueva fila
    const newRow = tableBody.insertRow(0);
    
    // Insertar celdas
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    // Agregar el texto original y el invertido
    cell1.textContent = text;
    cell2.textContent = reverseString(text);
    
    // Limpiar el input y actualizar la vista previa
    textInput.value = '';
    updatePreviewAndButton();
}

// Event listeners
document.getElementById('textInput').addEventListener('input', updatePreviewAndButton);
document.getElementById('textInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && this.value.trim().length >= 3) {
        processText();
    }
});

// Inicializar el estado del botón y la vista previa
updatePreviewAndButton();