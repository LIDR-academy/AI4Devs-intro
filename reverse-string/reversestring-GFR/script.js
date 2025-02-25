function invertString() {
    let inputText = document.getElementById("inputText").value;
    if (inputText.length >= 3) {
        let invertedText = inputText.split('').reverse().join('');
        document.getElementById("result").innerText = "Inverted String: " + invertedText;
    } else {
        document.getElementById("result").innerText = "Please enter at least 3 letters.";
    }
}