class SubSystemOne {
    MethodOne() {
        console.log("子系統方法一");
    }
}

class SubSystemTwo {
    MethodTwo() {
        console.log("子系統方法二");
    }
}
class SubSystemThree {
    MethodThree() {
        console.log("子系統方法三");
    }
}
class SubSystemFour {
    MethodFour() {
        console.log("子系統方法四");
    }
}

// 外觀類別
class Facade {
    constructor() {
        this.one = new SubSystemOne();
        this.Two = new SubSystemTwo();
        this.Three = new SubSystemThree();
        this.Four = new SubSystemFour();
    }

    MethodA() {
        this.one.MethodOne();
        this.Two.MethodTwo();
        this.Four.MethodFour();
    }

    MethodB() {
        this.Two.MethodTwo();
        this.Three.MethodThree();
    }
}

let facafe = new Facade();
facafe.MethodA();
facafe.MethodB();
