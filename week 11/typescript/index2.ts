let a = 5;

const f = () => 5;

let s = 'asdf';

const sy = Symbol();
const o = {};

function toUpperCase(val: string): void {
    val.toUpperCase();
}

toUpperCase(s);

interface NamePerson {
    name: string;
}

interface AgePerson {
    age: number;
}

interface Person extends AgePerson, NamePerson {}

class Person {
    constructor() {}
}

export function getPerson(): Person {

    const person: Person = {
        name: 'Dobrin',
        age: 5
    };

    return person;
}

