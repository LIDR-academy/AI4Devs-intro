document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reversedText = document.getElementById('reversedText');

    inputText.addEventListener('input', () => {
        const input = inputText.value;
        const reversed = input.split('').reverse().join('');
        reversedText.textContent = reversed;
    });
});
