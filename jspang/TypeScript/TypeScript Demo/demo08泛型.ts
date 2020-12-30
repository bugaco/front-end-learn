function join<LYZGeneric>(first: LYZGeneric, second: LYZGeneric) {
    return `${first}${second}`
}

console.log(join("a", "b"))

function joinArray<T>(array: T[]) {
    return array.join(',')
}
console.log(joinArray(["a", "b"]))

function join2G<T, P>(first: T, second: P) {
    return `${first}${second}`
}
console.log(join2G<number, string>(2, "a"))

interface Girl {
    name: string
}

class BeautifulGirl implements Girl {
    constructor(public name: string) {
    }
}
class SelectGirl<T extends Girl> {
    constructor(private girls: T[]) { }
    getGirl(index: number): string {
        return this.girls[index].name
    }
}
const bGirl1 = new BeautifulGirl("小刚")
const girls = new SelectGirl([{ name: "小美" }, { name: "小红" }, { name: "小明" }, bGirl1])
console.log(girls.getGirl(3))

// 泛型约束
class SelectGirl2<T extends string | number> {
    constructor(private girls: T[]) { }
    getGirl(index: number): T {
        return this.girls[index];
    }
}

const selectGirl2 = new SelectGirl2<string>(["大脚", "刘英", "晓红"]);
const selectGirl3 = new SelectGirl2<number>([1, 2, 3]);
const selectGirl4 = new SelectGirl2([bGirl1]);
console.log(selectGirl2.getGirl(1));
console.log(selectGirl3.getGirl(1));
