class Person {
    content = "Hello"
    greeting() {
        console.log("Person greeting")
        return this.content
    }
}

class Man extends Person {
    greeting() {
        console.log("Man greeting")
        
        return super.greeting() + " " + "Hello, guy"
    }
    makeMoney() {

    }
}

const p1 = new Person()
console.log(p1.greeting())
const man1 = new Man()
console.log(man1.greeting())
