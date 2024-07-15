class Person {
    constructor() {}
    helloworld() {
        console.log('hello world');
    }
}

const person = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + ' years old.';
};

export { Person, person };