let count: number = 1
count = 2

interface Person {
    uname: string
    age: number
}

const zhangsan: Person = {
    uname: "张三",
    age: 30,
}
zhangsan.uname = "张大三"

let countInference = 123

function add(param1: number, param2: number): number {
    return param1 + param2
}

function sayHello(): void {
    console.log("hello world");
}

sayHello()

function errorFuntion(): never {
    throw new Error();
    console.log("Hello World");
}
errorFuntion()

function add2({ one, two }) {
    return one + two
}

const rst = add2({ one: 1, two: 2 })

interface Para {
    one: number
    two: number
}

function add3(para: Para): number {
    return para.one + para.two
}
const para1: Para = { one: 1, two: 2 }
const rst3 = add3(para1)

const rst2 = add3({ one: 4, two: 5 })

const nums: number[] = [1, 2, 3]
const strings = ["a", "b", "c"]
const mixes = [1, "a", "b"]
const mixes2: (number | string)[] = ['a', 3, 4]

// 对象类型的数组
class Animal {
    name: string
}
const cat: Animal = { name: "Cat" }
const dog: Animal = { name: "Dog" }
const animals: Animal[] = [cat, dog]

// type的使用
type Lady = { name: string, age: number }
const ladies: Lady[] = [
    { name: "翠花", age: 18 },
    { name: "小芳", age: 18 }]