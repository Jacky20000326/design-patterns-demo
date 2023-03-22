class InterfaceQuack {
    quack() {}
}
class InterfaceFly {
    fly() {}
}
class CanFly extends InterfaceFly {
    fly() {
        console.log("我會飛");
    }
}
class CanNotFly extends InterfaceFly {
    fly() {
        console.log("我不會飛");
    }
}
class CanQuack extends InterfaceQuack {
    quack() {
        console.log("我會叫");
    }
}

class CanNotQuack extends InterfaceQuack {
    quack() {
        console.log("我不會叫");
    }
}

class Duck {
    constructor(Ifly, IQuack) {
        this.Ifly = Ifly;
        this.IQuack = IQuack;
    }
}

let SpyDuck = new Duck(new CanNotFly(), new CanQuack());
SpyDuck.Ifly.fly();
SpyDuck.IQuack.quack();
