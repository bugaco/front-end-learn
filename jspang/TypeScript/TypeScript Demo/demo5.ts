class Keyboard {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

const magicKeyboard = new Keyboard("magic keyboard")
console.log(magicKeyboard.name)

// 简化的写法：
class Mouse {
    constructor(public name: string) {
        
    }
}
const magicMouse = new Mouse("magic mouse")
console.log(magicMouse.name)

// 类继承中的构造器写法

class Person5 {
    constructor(public name: string){}
}

class Teacher5 extends Person5 {
    constructor(public name: string, public subject: string) {
        super(name)
    }
}

// get set 

class Animal5 {
    readonly color: string
    static prop: string = "static prop"

    constructor(private _name: string) {
        this.color = "red"
    }
    get name() {
        return this._name
    }
    set name(name: string) {
        this._name = name
    }

    static foo() {
        console.log("static foo")
    }
}

let a1 = new Animal5("小牛")
console.log(a1.name)

Animal5.foo()
console.log(Animal5.prop)
console.log(a1.color)
// a1.color = "yellow" // 报错