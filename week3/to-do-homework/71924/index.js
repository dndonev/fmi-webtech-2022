document.addEventListener('DOMContentLoaded', () => {
        

});


function addItem() {
    const inputText = document.getElementsByTagName('input')[0].value;

    const li = document.createElement('li');
    const button = document.createElement('button');
    const div = document.createElement('div');

    li.textContent = inputText;
    button.textContent = 'Delete';
    button.addEventListener("click", deleteFunction);
    

    div.appendChild(li);
    div.appendChild(button);
    document.querySelector('ol').appendChild(div);
    
}

function deleteFunction()
{

    
}