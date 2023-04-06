class Headler {
    SetSuccessor(successor) {
        this.successor = successor;
    }
    HandleRequert(request) {}
}

class ConcreteHeadler1 extends Headler {
    HandleRequert(request) {
        if (request >= 0 && request < 10) {
            console.log("0-10處裡此請求");
        } else if (this.successor != null) this.successor.HandleRequert(request);
    }
}

class ConcreteHeadler2 extends Headler {
    HandleRequert(request) {
        if (request >= 10 && request < 20) {
            console.log("10-20處裡此請求");
        } else if (this.successor != null) this.successor.HandleRequert(request);
    }
}

class ConcreteHeadler3 extends Headler {
    HandleRequert(request) {
        if (request >= 20 && request < 30) {
            console.log("20-30處裡此請求");
        } else if (this.successor != null) this.successor.HandleRequert(request);
    }
}

let h0 = new ConcreteHeadler1();
let h2 = new ConcreteHeadler2();
let h3 = new ConcreteHeadler3();

h0.SetSuccessor(h2);
h2.SetSuccessor(h3);

let request = [2, 5, 114, 22, 18, 3, 27, 20];
request.forEach((item) => {
    h1.HandleRequert(item);
    h1.HandleRequert(item);
    h1.HandleRequert(item);
    h1.HandleRequert(item);
    h1.HandleRequert(item);
    h1.HandleRequert(item);
    h1.HandleRequert(item);
    h1.HandleRequert(item);
});

// Head -> 不做任何行為，把請求丟進鏈裡
