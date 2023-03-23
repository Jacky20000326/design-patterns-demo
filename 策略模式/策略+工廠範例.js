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

// factory

class CashContext {
    constructor(type) {
        let cs = null;
        // 工廠
        switch (type) {
            case "正常收費":
                cs = new CashNormal();
                break;

            case "打折收費":
                cs = new CashRebate();
                break;
        }
        // 工廠
        this.cs = cs;
    }

    getResult(money) {
        return this.cs.acceptCash(money);
    }
}
// 被抽換物件本身不知道
let cashFactory = new CashContext("正常收費");
// console.log(cashRebate.acceptCash(100));
console.log(cashFactory.getResult(111));
