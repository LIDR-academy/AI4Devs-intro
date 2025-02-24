
        function invertirTexto() {
            const input = document.getElementById("inputText").value;
            const resultado = input.split('').reverse().join('');
            document.getElementById("outputText").textContent = resultado;
        }
