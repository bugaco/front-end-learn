interface Waiter {
    canServe: boolean;
    say: () => {};
}

interface Teacher {
    canTeach: boolean;
    skill: () => {};
}

function judgeWho(person: Waiter | Teacher) {

    /* in */
    // if ("canServe" in person) {
    //     person.say()
    // } else {
    //     person.skill()
    // }
}

class Monkey {
    eatBanana() {

    }
}

class Rabbit {
    eatGrass() {

    }
}

function eat(animal: Monkey | Rabbit) {

    if (animal instanceof Monkey) {
        animal.eatBanana()
    } else {
        animal.eatGrass()
    }
}

function judgeType(parameter: number | string) {
    if (typeof parameter === "string") {
        console.log(parameter.toLowerCase)
    } else {
        console.log(parameter.toPrecision)
    }
}

function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
    }
    return first + second;
}

enum Service {
    MASSAGE,
    SPA,
}

function serve(type: Service) {
    console.log(type)
    switch (type) {
        case Service.MASSAGE:
            console.log("💆‍♂️")
        case Service.SPA:
            console.log("spa")
    }
}

serve(Service.SPA)