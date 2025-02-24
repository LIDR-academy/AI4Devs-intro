
        function invertirTexto() {
            const input = document.getElementById("inputText").value;
            const resultado = input.split('').reverse().join('');
            document.getElementById("outputText").textContent = resultado;
        }

        function toggleButton() {
            const input = document.getElementById("inputText").value;
            const button = document.getElementById("invertButton");
            button.style.display = input.length > 3 ? "inline-block" : "none";
        }
