class Person {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(`裝扮的${this.name}`);
    }
}

class Finery extends Person {
    Decorate(component) {
        this.component = component;
    }
    show() {
        if (this.component != null) {
            this.component.show();
        }
    }
}

class TShire extends Finery {
    show() {
        super.show();
        console.log("大T恤");
    }
}
class BigTrouser extends Finery {
    show() {
        super.show();
        console.log("垮褲");
    }
}

let Person1 = new Person("Jacky");
let ConcreteTShirt = new TShire();
let ConcreteBigTrouser = new BigTrouser();

ConcreteTShirt.Decorate(Person1);
ConcreteBigTrouser.Decorate(ConcreteTShirt);
ConcreteBigTrouser.show();
