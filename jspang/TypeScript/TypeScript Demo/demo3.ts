interface Person3 {
    name: string;
    age: number;
    interests?: string;
    [propname: string]: any;
    greeting(): string;
}

const zhangsan3: Person3 = {
    name: "张三",
    age: 23,
    sex: "男",
    address: "无",
    greeting() {
        return "Hello"
    }
}

console.log(zhangsan3.sex)
console.log(zhangsan3.address)
console.log(zhangsan3.greeting())
console.log("interests ", zhangsan3.interests)

class Coder2 implements Person3 {
    content: string
    [propname: string]: any
    name: string
    age: number
    interests?: string
    greeting(): string {
        throw new Error("Hello, World!")
    }
}

interface Teacher extends Person3 {
    subject: string
}

const teachWang: Teacher = {
    name: "王老师",
    age: 38,
    subject: "语文",
    greeting() {
        return "大家好啊"
    }
}