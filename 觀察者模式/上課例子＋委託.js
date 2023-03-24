// 引入 events 模块
var events = require("events");
// 创建 eventEmitter 对象
var emitter = new events.EventEmitter();

// 當我更新kill時ui要跟著改動
class Kill {
    constructor() {
        this.list = [];
    }
    // Add(data) {
    //     this.list.push(data);
    // }
    Sub() {
        // 將資料從list移除
    }
}

class Ui {
    update() {}
}

class ConcreteKill extends Kill {
    constructor(uiUpdateMsg) {
        super();
        this.uiUpdateMsg = uiUpdateMsg;
    }
    Notify() {
        emitter.emit("event");
    }
}

class ConcreteUi extends Ui {
    // 擁有concreteKill
    constructor(kill) {
        super();
        this.kill = kill;
    }
    UiUpdate() {
        console.log("更新畫面");
    }
}

// 增加FK(首殺)
class FK extends Ui {
    constructor(kill) {
        super();
        this.kill = kill;
    }
    FkUpdate = () => {
        console.log("配通知首殺，" + this.kill.uiUpdateMsg);
    };
}

let concreteKill = new ConcreteKill();
let fk = new FK(concreteKill);
let concreteUi = new ConcreteUi(concreteKill);

concreteKill.uiUpdateMsg = "畫面已更新";

// event同時呼叫FkUpdate及UiUpdate
emitter.on("event", fk.FkUpdate);
emitter.on("event", concreteUi.UiUpdate);

concreteKill.Notify();
