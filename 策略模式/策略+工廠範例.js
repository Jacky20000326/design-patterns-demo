// 收費的抽象類別
class CashSuper {
    acceptCash(money) {}
}

// 正常收費
class CashNormal extends CashSuper {
    acceptCash(money) {
        return money;
    }
}

// factory

class CashFactory {
    constructor(type) {
        let cs = null;
        switch (type) {
            case "正常收費":
                cs = new CashNormal();
                break;

            case "打折收費":
                cs = new CashRebate();
                break;
        }
        this.cs = cs;
    }

    getResult(money) {
        return this.cs.acceptCash(money);
    }
}

// 打折收費
class CashRebate extends CashSuper {
    constructor(moneyRebate = 0.8) {
        super();
        this.moneyRebate = moneyRebate;
    }

    acceptCash(money) {
        return money * this.moneyRebate;
    }
}

let cashFactory = new CashFactory("正常收費");
// console.log(cashRebate.acceptCash(100));
console.log(cashFactory.getResult(111));
