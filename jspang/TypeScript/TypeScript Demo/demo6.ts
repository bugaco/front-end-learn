abstract class Girl {
    abstract skill(): void
}

class Waiter extends Girl {
    skill() {
        console.log("大爷，请喝茶！")
    }
}
