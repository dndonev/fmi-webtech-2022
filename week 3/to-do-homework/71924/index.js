document.addEventListener('DOMContentLoaded', () => {
        

});

var idNum=0;

function addItem() {
    const inputText = document.getElementsByTagName('input')[0].value;

    const li = document.createElement('li');
    const button = document.createElement('button');
    const div = document.createElement('div');

    li.textContent = inputText;
    button.textContent = 'Delete';
    button.addEventListener('click', function(){
        removeDiv(div);
    }, false);
    
    div.appendChild(li);
    div.appendChild(button);

    idNum++;
    div.setAttribute('id', idNum);
    document.querySelector('ol').appendChild(div);
    
}

function removeDiv(divObject)
{
    document.querySelector('ol').removeChild(divObject);
}


