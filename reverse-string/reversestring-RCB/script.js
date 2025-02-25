document.getElementById("userInput").addEventListener("input", function() {
  let input = this.value;
  let outputElement = document.getElementById("output");

  if (input.length > 3) {
    outputElement.textContent = input.split('').reverse().join('');
  } else {
    outputElement.textContent = ""; // Borra el resultado si es menor o igual a 3 caracteres
  }
});
