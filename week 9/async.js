// users/1/order-details
async function getValue() {
    let myValue = 0;
    const users = new Promise((res, rej) => res(5));
    const order = new Promise();
    const orderDetails = new Promise();

    users
        .then(users => {
            order.then(order => {
                orderDetails.then(x => {
                    return 
                });
            });
        });

    // same as

    try {
        const myUsers = await users;
        const myOrder = await orders;
        const myOrderDetails = await orderDetails;
    } catch (e) {
        // if err console.error(e);
    }


    try {
        myValue = await p1;
        myValue = await p1;
    } catch (e) {
        // if error
    }
}

getValue();

const p2 = new Promise();

p2
    .then()
    .catch()









