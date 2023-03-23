class Strategy {
    AlgorithmInterface() {}
}
class ConcreteStrategyA extends Strategy {
    AlgorithmInterface() {
        console.log("演算法A實現");
    }
}
class ConcreteStrategyB extends Strategy {
    AlgorithmInterface() {
        console.log("演算法B實現");
    }
}
class ConcreteStrategyC extends Strategy {
    AlgorithmInterface() {
        console.log("演算法C實現");
    }
}

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    ConcreteStrategyInterface() {
        this.strategy.AlgorithmInterface();
    }
}

let context = new Context(new ConcreteStrategyC());
context.ConcreteStrategyInterface();
