document.addEventListener('DOMContentLoaded', () => {
        

});

function addItem() {
    const inputText = document.getElementsByTagName('input')[0].value;

    var li = document.createElement('li');
    var btn = document.createElement('button');

    li.textContent = inputText;
    btn.textContent = "delete";
    li.appendChild(btn);
    document.querySelector('ol').appendChild(li);
    btn.addEventListener("click", function () {         
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

}