function reverseText() {
    let input = document.getElementById("textInput").value;
    let reversed = input.split("").reverse().join("");
    document.getElementById("result").textContent = reversed;
}

function copyText() {
    let resultText = document.getElementById("result").textContent;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
