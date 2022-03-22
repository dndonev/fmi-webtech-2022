
// function something(number) {
//     console.log(number)
// }

// function includeSomething(fn) {
//     fn(5);
// }

// includeSomething(something);
 
// const variable = 5;

const handler = function (isTimeout) {
    return isTimeout ? function () {
        console.log('Hello from timeout')
    } : function () {
        console.log('Hello from interval')
    }
};


const timeout = setTimeout(handler(true), 3000);
const interval = setInterval(handler(false), 1000);

setTimeout(function () {
    clearTimeout(timeout)
    clearInterval(interval)
}, 2000);

