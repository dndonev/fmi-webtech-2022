globalThis.name = 'New DObrin'

const myobj = {
    name: 'Dobrin',
    fn: 123213,
    introduce: function (counter, age) {
        console.log(arguments);
        console.log(`Hello my name is ${this.name}`, counter);
    }
};

// myobj.introduce();

// const myIntroduction = myobj.introduce;

const myBoundIntro = myobj.introduce.bind({ name: 'Bound Dobrin' })

myobj.introduce.call({name: 'Not Dobrin'}, 0, 123);
myobj.introduce.apply({name: 'Not Dobrin'}, [0, 123]);

myBoundIntro();

