
document.addEventListener('DOMContentLoaded', () => {
    getItems();
});

function addItem() {
    const inputText = document.getElementsByTagName('input')[0].value;

    const li = document.createElement('li');

    li.textContent = inputText;

    document.querySelector('ol').appendChild(li);
}

function getItems() {
    fetch('http://localhost:3000/api/items')
        .then((response) => response.json())
        .then((listItems) => {
            if (listItems && listItems.length !== 0) {
                listItems.map(item => {
                    const li = document.createElement('li');

                    li.textContent = item;
                
                    document.querySelector('ol').appendChild(li);
                })
            }
        })
}

function submitItems() {
    const items = Array.from(
        document.querySelector('ol').childNodes).map(li => li.textContent);

    fetch('http://localhost:3000/api/items', {
        method: 'POST',
        body: JSON.stringify({ items: items }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then((response) => response.json())
        .then((result) => console.log(result))
}