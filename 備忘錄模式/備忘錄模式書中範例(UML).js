class Originator {
    constructor(state) {
        this.state = state;
        // 可能有好幾個要保存的屬性
    }
    CreateMemento() {
        return new Memento(this.state);
        // 建立備忘錄，將要保存的資料放進備忘錄，並在產生實體
    }
    SetMemento(memento) {
        // 恢復備忘錄，將備忘錄的內容恢復
        this.state = memento.state;
    }
    Show() {
        console.log("State" + " " + this.state);
    }
}

class Memento {
    constructor(state) {
        this.state = state;
    }
}

// 備忘錄
class Caretaker {
    constructor(memento) {
        // 得到或設定備忘錄
        this.memento = memento;

        // tick(一段時間存取一個tick)(遊戲)
        // 應該為陣列，裡面應該存放一連串的資料(透過資料來紀錄回放的動作)
    }
}
// 備忘錄
let o = new Originator();
o.state = "on";
o.Show();

let c = new Caretaker();
c.memento = o.CreateMemento();

o.state = "off";
o.Show();

o.SetMemento(c.memento);
o.Show();
