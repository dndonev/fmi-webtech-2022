document.addEventListener('DOMContentLoaded', () => 
{});

function addItem() 
{
    const inputText = document.getElementsByTagName('input')[0].value;
    const list = document.querySelector('ol');

    const li = document.createElement('li');
    li.textContent = inputText;

    const deleteTask = document.createElement('button');
    deleteTask.textContent = "Delete";

    list.appendChild(li);
    list.appendChild(deleteTask);
    
    deleteTask.addEventListener("click", event =>
    {
        list.removeChild(li);
        list.removeChild(deleteTask);
    });
}
