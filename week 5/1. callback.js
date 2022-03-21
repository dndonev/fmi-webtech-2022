
// function something(number) {
//     console.log(number)
// }

// function includeSomething(fn) {
//     fn(5);
// }

// includeSomething(something);
 
// const variable = 5;

const handler = function () {
    console.log('Hello from time out');
};

const handlerInterval = function () {
    console.log('Hello from interval');
};

const timeout = setTimeout(handler, 3000);
const interval = setInterval(handlerInterval, 1000);

setTimeout(function () {
    clearTimeout(timeout)
    clearInterval(interval)
}, 2000);

