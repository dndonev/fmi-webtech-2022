

console.log(window) // главен обект
console.log(window.location)
console.log(window.navigator)
console.log(window.screen)
console.log(window.history)
console.log(window.document)

document.addEventListener('DOMContentLoaded', () => { // елементите са заредени!
        
    document.querySelectorAll('h1').forEach((h, i) => {
        const span = document.createElement('span');

        span.textContent = ' - ' + i;

        h.appendChild(span);
    });
});

function onButtonClick() {
    location.reload();
}