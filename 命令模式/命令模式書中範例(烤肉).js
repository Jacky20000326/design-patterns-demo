// 烤肉傳者
class Barbecuer {
    BakeMutton() {
        console.log("烤羊肉串");
    }
    BakeChickenWing() {
        console.log("烤雞翅");
    }
}

class Command {
    constructor(receiver) {
        // 烤肉串者
        this.receiver = receiver;
    }
    ExcuteCommand() {}
}
// 烤羊肉命令
class BakeMuttonCommand extends Command {
    constructor(receiver) {
        super(receiver);
    }
    ExcuteCommand() {
        this.receiver.BakeMutton();
    }
}
// 烤雞翅命令
class BakeChickenWingCommand extends Command {
    constructor(receiver) {
        super(receiver);
    }
    ExcuteCommand() {
        this.receiver.BakeChickenWing();
    }
}

// 服務生
class Waiter {
    constructor() {
        this.order = [];
    }
    // 設定訂單
    SetOrder(commend) {
        if (toString(commend) == "命令模式.BakeChickenWingCommand") {
            console.log("服務生：雞翅沒有了，請點別的燒烤");
        } else {
            this.order.push(commend);
            console.log("增加訂單" + commend.toString() + "時間" + new Date().toString());
        }
    }
    // 取消訂單
    CancelOrder() {
        this.order = [];
        console.log("取消訂單" + commend.toString() + "時間" + new Date().toString());
    }
    Notify() {
        this.order.forEach((item) => {
            item.ExcuteCommand();
        });
    }
}

let boy = new Barbecuer();
let bakeMuttonCommand1 = new BakeMuttonCommand(boy);
let bakeMuttonCommand2 = new BakeMuttonCommand(boy);
let bakeChickenWingCommand1 = new BakeChickenWingCommand(boy);

let girl = new Waiter();
girl.SetOrder(bakeMuttonCommand1);
girl.SetOrder(bakeMuttonCommand2);
girl.SetOrder(bakeChickenWingCommand1);

girl.Notify();
