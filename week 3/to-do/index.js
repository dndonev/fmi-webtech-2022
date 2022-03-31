document.addEventListener('DOMContentLoaded', () => {
        

});


function addItem() {
    const inputText = document.getElementsByTagName('input')[0].value;

    const li = document.createElement('li');

    li.textContent = inputText;

    document.querySelector('ol').appendChild(li);
}