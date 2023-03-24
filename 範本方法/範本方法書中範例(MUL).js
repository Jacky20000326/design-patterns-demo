class AbstractClass {
    TemplateMethod() {
        this.PrimitiveOperation1();
        this.PrimitiveOperation2();
        console.log("");
    }
}

class ConcreteClassA extends AbstractClass {
    PrimitiveOperation1() {
        console.log("具體類別A方法1實現");
    }
    PrimitiveOperation2() {
        console.log("具體類別A方法2實現");
    }
}

class ConcreteClassB extends AbstractClass {
    PrimitiveOperation1() {
        console.log("具體類別B方法1實現");
    }
    PrimitiveOperation2() {
        console.log("具體類別B方法2實現");
    }
}

// 用戶端調用

let customA = new ConcreteClassA();
customA.TemplateMethod();

let customB = new ConcreteClassB();
customB.TemplateMethod();
