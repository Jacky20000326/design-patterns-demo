class Fund {
    constructor() {
        this.gu1 = new Stock1();
        this.gu2 = new Stock2();
        this.gu3 = new Stock3();
        this.nd1 = new NationalDebt1();
        this.rt1 = new Realty1();
    }

    BuyFund() {
        this.gu1.Buy();
        this.gu2.Buy();
        this.gu3.Buy();
        this.nd1.Buy();
        this.rt1.Buy();
    }

    SellFund() {
        this.gu1.Sell();
        this.gu2.Sell();
        this.gu3.Sell();
        this.nd1.Sell();
        this.rt1.Sell();
    }
}

class Stock1 {
    Sell() {
        console.log("股票1賣出");
    }
    Buy() {
        console.log("股票1買入");
    }
}
class Stock2 {
    Sell() {
        console.log("股票2賣出");
    }
    Buy() {
        console.log("股票2買入");
    }
}
class Stock3 {
    Sell() {
        console.log("股票3賣出");
    }
    Buy() {
        console.log("股票3買入");
    }
}
class NationalDebt1 {
    Sell() {
        console.log("公債賣出");
    }
    Buy() {
        console.log("公債買入");
    }
}
class Realty1 {
    Sell() {
        console.log("房地產賣出");
    }
    Buy() {
        console.log("房地產買入");
    }
}

// 用戶端程式
let jijin = new Fund();

jijin.BuyFund();
jijin.SellFund();
