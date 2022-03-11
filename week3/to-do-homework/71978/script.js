var idBtn = 0;

function onButtonClick() {

    const input = document.getElementsByTagName('input')[0].value;

    const li = document.createElement('li');
    li.setAttribute('id', idBtn.toString());

    li.textContent = input;

    const button = document.createElement('button');
    button.setAttribute('id', idBtn.toString());
    button.setAttribute('onclick', 'deleteButtonClick('+ idBtn +')');
    button.textContent = "delete";

    li.appendChild(button);

    document.querySelector('ol').appendChild(li);

    idBtn++;
}

function deleteButtonClick(id){

   // var list = document.getElementById('list');
   var list = document.querySelector('ol');

    var li = document.getElementById(id.toString());

    console.log(list);
    console.log(li);

    list.removeChild(li);

}