
console.log(myThing); // hoisted

var myThing = 5; // es5

let myOtherThing = 5; // es6

const mySecondVar = 5  //es6

// closure - remembering the execution context
function outer() {
    let myVar = 5;

    function inner() {
        myVar = 6; // using the outer scope
        console.log(myVar);
    }

    return inner;
}

const myInner = outer();
myInner(); // outer scope not deleted (myVar)