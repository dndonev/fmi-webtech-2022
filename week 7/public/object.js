const person = {
    name: 'Dobrin',
    fn: '12321312'
};

const child = {
    nickname: 'DDDDD'
};

// ... === Object.assign({}, person)
const anotherPerson = { ... person, ...child };

anotherPerson.name = 'Peter';
console.log(person.name);
// const name = person.name;
// const fn = person.fn;
// const asdf = person.asdf;

const { name, fn, asdf } = person;

const array = [1,2,3];
const [first, second, third] = array;


