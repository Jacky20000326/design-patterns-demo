class Component {
    Operation() {}
}

class ConcreteComponent extends Component {
    Operation() {
        console.log("具體物件操作");
    }
}

class Decorator extends Component {
    // 透過SetComponent的方法將物件進行封裝
    SetComponent(component) {
        this.component = component;
    }

    Operation() {
        if (this.component != null) {
            this.component.Operation();
        }
    }
}

// concrete
class ConcreteDecoratorA extends Decorator {
    Operation() {
        super.Operation();
        this.addedState = "New State";
        console.log("四體裝飾物件A的操作");
    }
}

class ConcreteDecoratorB extends Decorator {
    Operation() {
        super.Operation();
        this.AddedBehavior();
        console.log("四體裝飾物件B的操作");
        // console表示複雜程式碼()
    }
    AddedBehavior() {}
}

// 做裝飾的地方需要被包起來
let concreteComponent = new ConcreteComponent();
let concreteDecoratorA = new ConcreteDecoratorA();
let concreteDecoratorB = new ConcreteDecoratorB();

// 裝飾者
concreteDecoratorA.SetComponent(concreteComponent);
concreteDecoratorB.SetComponent(concreteDecoratorA);
concreteDecoratorB.Operation();
