document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("textInput");
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copiar texto";
    copyButton.style.display = "none"; // Ocultar botón inicialmente
    document.body.appendChild(copyButton);

    const result = document.getElementById("result");

    input.addEventListener("input", function () {
        const text = input.value;
        result.textContent = text.split("").reverse().join(""); // Actualizar resultado en tiempo real

        if (text.length > 3) {
            copyButton.style.display = "block"; // Mostrar botón si hay más de 3 letras
        } else {
            copyButton.style.display = "none"; // Ocultar botón si hay 3 o menos letras
        }
    });

    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(result.textContent)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar", err);
            });
    });
});
