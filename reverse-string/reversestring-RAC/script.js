// Referencias a los elementos del DOM
const inputString = document.getElementById("inputString");
const reverseBtn = document.getElementById("reverseBtn");
const output = document.getElementById("output");

// 1) Solo mostrar el botón Reverse cuando hay texto
inputString.addEventListener("input", function() {
  const text = inputString.value;
  // 2) Mostramos/ocultamos el botón Reverse si hay texto
  if (text.length > 0) {
    reverseBtn.style.display = "inline-block";
  } else {
    reverseBtn.style.display = "none";
    output.textContent = ""; // Limpiamos el output si no hay texto
  }
});

// 3) Botón Reverse: invierte el texto cuando se presiona
function manualReverse() {
  const text = inputString.value;
  const reversedText = text.split("").reverse().join("");
  output.textContent = reversedText;
}

// 4) Botón Copy para copiar el texto invertido al portapapeles
function copyReversed() {
  const reversedText = output.textContent;
  
  if (reversedText) {
    navigator.clipboard.writeText(reversedText)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch(err => {
        console.error("Error al copiar: ", err);
      });
  } else {
    alert("No hay texto para copiar");
  }
}
