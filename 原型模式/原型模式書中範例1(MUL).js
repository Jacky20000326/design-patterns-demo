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
        super();
        this.id = id;
    }
    Clone() {
        return Object.create(this);
    }
}

// 用戶端程式碼
let p1 = new ConcretePrototype1("ConcretePrototype1Id");
let c1 = p1.Clone();

console.log(c1.id);

// ----- 測試 -----
// let p1 = new ConcretePrototype1("ConcretePrototype1Id");
// let c1 = p1.Clone();
// let c2 = p1.Clone();
// c1.id = "hello";
// console.log(c2.id);
