/* unshift is like push but adds the values to the beginning of the array rather than the ending like push does */

// notes over classes and inherritance
class Person {
    constructor(name, age, desire) {
        this.name = name;
        this.age = age;
        this.desire = desire;
        this.greet();
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

let dorothy = new Person("Dorothy", 12, "Kansas");
console.log(dorothy.age)

class Lion extends Person {
    eat() {
        console.log("Yum!");
    }
}

cowardly = new Lion("Coward", 20, "Courage")
cowardly.eat();