class Parent {
    constructor() {
        this.name = 'parent';
    }
    getGreetText() {
        return `Hello. I am  ${this.name}.`;
    }
    sayHi() {
        const str = this.getGreetText();
        console.log(str);
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.name = 'child';
    }    
}


class Ninja extends Parent {
    constructor() {
        super();
        this.name = 'ninja';
    }
    greet() {
        const hello = this.getGreetText();
        console.log(`${hello}. Nice to meet you.`);
    }
    bye() {
        console.log(`Bye from ${this.name}.  Meet you soon.`);
    }
}

const parent = new Parent();
parent.sayHi();
console.log('------------------');
const child = new Child();
child.sayHi();
console.log('------------------');
const ninja = new Ninja();
ninja.greet();
ninja.bye();
