class Originator {
    constructor(state){
        this.state = state
        // 可能有好幾個要保存的屬性
    }
    CreateMemento(){
        return new Memento(this.state)
        // 建立備忘錄，將要保存的資料放進備忘錄，並在產生實體
    }
    SetMemento(memento){
        // 恢復備忘錄，將備忘錄的內容恢復
        this.state = memento.state
    }
    Show(){
        console.log('State'+" "+this.state)
    }
}

class Memento{
    constructor(state){
        this.state = state
    }
}

class Caretaker {
    constructor(memento){
        // 得到或設定備忘錄
        this.memento = memento
    }
}

let o = new Originator()
o.state = "on"
o.Show()


let c = new Caretaker()
c.memento = o.CreateMemento()

o.state = "off"
o.Show()

o.SetMemento(c.memento)
o.Show()