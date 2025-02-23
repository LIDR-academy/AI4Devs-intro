// Función reutilizable para invertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Bloque 1: Resultado al pulsar el botón
  const inputBlock1 = document.getElementById('inputBlock1');
  const buttonBlock1 = document.getElementById('buttonBlock1');
  const resultBlock1 = document.getElementById('resultBlock1');
  buttonBlock1.addEventListener('click', () => {
    resultBlock1.textContent = reverseString(inputBlock1.value);
  });
  
  // Bloque 2: Resultado al introducir 3 o más caracteres
  const inputBlock2 = document.getElementById('inputBlock2');
  const resultBlock2 = document.getElementById('resultBlock2');
  inputBlock2.addEventListener('input', () => {
    const text = inputBlock2.value;
    resultBlock2.textContent = text.length >= 3 ? reverseString(text) : '';
  });
  
  // Bloque 3: Resultado automático en tiempo real
  const inputBlock3 = document.getElementById('inputBlock3');
  const resultBlock3 = document.getElementById('resultBlock3');
  inputBlock3.addEventListener('input', () => {
    resultBlock3.textContent = reverseString(inputBlock3.value);
  });
  