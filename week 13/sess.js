const myCounterKey = 'my-counter';


document.addEventListener('DOMContentLoaded', () => {
    onInit();
});


function onInit() {
    const user = {
        username: 'Dobrin'
    };


    localStorage.setItem('my-user', JSON.stringify(user));

    const newuser = JSON.parse(localStorage.getItem('my-user'));

    // change with sessionStorage and see the difference
    // with two tabs
    let counter = +window.localStorage.getItem(myCounterKey); 

    if (counter) {
        localStorage.getItem(myCounterKey, 0)
    }
    const p = document.getElementsByTagName('p');
    p[0].textContent = newuser.username;
}

function onClick() {

    let counter = +window.localStorage.getItem(myCounterKey);
    counter = counter + 1;

    localStorage.setItem(myCounterKey, counter);

    const p = document.getElementsByTagName('p');
    p[0].textContent = counter;
}