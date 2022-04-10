// const myPromise = new Promise((resolve, reject) => {
//     // fetch API
//     const myResponse = {};
//     reject('Hello ')
// });

// myPromise
//     .then((result) => console.log('Resolved', result)) //get Order
//     .catch((rejected) => console.log('Rejected', rejected)) // get something
//     .finally(() => console.log('Finally'))


const promise1 = new Promise((res, rej) => {
    setTimeout(res, 2000, 'First');
});
const promise2 = new Promise((res, rej) => {
    setTimeout(res, 1000, 'Second');
});

Promise.race([promise1, promise2])
    .then((result) => console.log(result))