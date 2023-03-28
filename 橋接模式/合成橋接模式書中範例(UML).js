class Implementor {
    Opetation() {}
}

class ConcreteImplementorA extends Implementor {
    Opetation() {
        console.log("具體實現A的方法執行");
    }
}
class ConcreteImplementorB extends Implementor {
    Opetation() {
        console.log("具體實現B的方法執行");
    }
}

class Abstraction {
    SetImplementor(implementor) {
        this.implementor = implementor;
    }
    Opetation() {
        this.implementor.Opetation();
    }
}
class RefinedAbstraction extends Abstraction {
    Opetation() {
        this.implementor.Opetation();
    }
}

let ab = new RefinedAbstraction();

ab.SetImplementor(new ConcreteImplementorA());
ab.Opetation();

ab.SetImplementor(new ConcreteImplementorB());
ab.Opetation();
