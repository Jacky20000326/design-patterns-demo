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

    fly() {
        this.Ifly.fly();
    }
    quack() {
        this.IQuack.quack();
    }
}

// 客戶端

// 錯誤沒封裝
// let SpyDuck = new Duck(new CanNotFly(), new CanQuack());
// SpyDuck.Ifly.fly();
// SpyDuck.IQuack.quack();

let SpyDuck1 = new Duck(new CanFly(), new CanQuack());
let SpyDuck2 = new Duck(new CanNotFly(), new CanNotQuack());

SpyDuck1.fly();
SpyDuck1.quack();

SpyDuck2.fly();
SpyDuck2.quack();
