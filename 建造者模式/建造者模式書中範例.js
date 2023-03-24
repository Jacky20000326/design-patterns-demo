class Product {
    constructor() {
        this.List = [];
    }
    Add(part) {
        this.List.push(part);
    }
    Show() {
        console.log("產品 建立-----");
        this.List.forEach((listItem) => {
            console.log(listItem);
        });
    }
}

class Builder {
    BuildPartA() {}
    BuildPartB() {}
    GetResult() {}
}

class ConcreteBuilder1 extends Builder {
    constructor() {
        super();
        this.product = new Builder();
    }

    BuildPartA() {
        this.product.Add("零件A");
    }
    BuildPartB() {
        this.product.Add("零件B");
    }

    GetResult() {
        console.log(this.product);
    }
}

class ConcreteBuilder2 extends Builder {
    constructor() {
        super();
        this.product = new Builder();
    }

    BuildPartA() {
        this.product.Add("零件X");
    }
    BuildPartB() {
        this.product.Add("零件Y");
    }

    GetResult() {
        console.log(this.product);
    }
}

class Director {
    Construct(builder) {
        builder.BuildPartA();
        builder.BuildPartB();
    }
}

// 用戶端程式碼
let director = new Director();
let builder1 = new ConcreteBuilder1();
let builder2 = new ConcreteBuilder2();

director.Construct(builder1);
let product1 = builder1.GetResult();
product1.Show();
