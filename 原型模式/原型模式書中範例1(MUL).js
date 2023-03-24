// 原型類別
class Prototype {
    constructor(id) {
        this.id;
    }
    Clone() {}
}
// 具體原型類別
class ConcretePrototype1 extends Prototype {
    constructor(id) {
        super(id);
    }
    Clone() {
        return Object.create(this);
    }
}

// 用戶端程式碼
let p1 = new ConcretePrototype1("I");
let c1 = p1.Clone();
console.log(cl.id);
