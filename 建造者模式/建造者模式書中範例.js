class Product {
    constructor(){
        this.parts = [];
    }
    Add(part){
        this.parts.push(part)
    }
    Show(){
        console.log('產品建立')
        this.parts.forEach(item =>{
            console.log(item)
        })
    }
}

class Builder{
    BuildPartA(){}
    BuildPartB(){}
    GetResult(){}
}

class ConcreteBuilder1 extends Builder {
    constructor(){
        super()
        this.product = new Product();
        
    }
    BuildPartA(){
        this.product.Add('零件A')
    }
    BuildPartB(){
        this.product.Add('零件B')
    }
    GetResult(){
        return this.product
    }
}

class ConcreteBuilder2 extends Builder {
    constructor(){
        super()
        this.product = new Product();
        
    }
    BuildPartA(){
        this.product.Add('零件A')
    }
    BuildPartB(){
        this.product.Add('零件B')
    }
    GetResult(){
        return this.product
    }
}

class Director {
    Construct(builder){
        builder.BuildPartA()
        builder.BuildPartB()
    }
}

// 用戶端
let director = new Director()
let b1 = new ConcreteBuilder1()
let b2 = new ConcreteBuilder2()
director.Construct(b1)
let p1 = b1.GetResult()
p1.Show()