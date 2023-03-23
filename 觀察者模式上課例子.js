// 當我更新kill時ui要跟著改動
class Kill {
    constructor(){
        this.list = []
    }
    Add(data){
        this.list.push(data)
    }
    Sub(){
        // 將資料從list移除
    }
    Notify(){
        this.list.forEach(item => item.update())
    }
}

class Ui {
    update(){}
}

class ConcreteKill extends Kill{
    constructor(uiUpdate){
        super()
        this.uiUpdate = uiUpdate
    }
}

class ConcreteUi extends Ui{
    // 擁有concreteKill
    constructor(kill){
        super()
        this.kill = kill
    }
    update(){
        this.uiUpdate = this.kill.uiUpdate
        console.log(this.uiUpdate)
    }
}

let concreteKill = new ConcreteKill()
concreteKill.uiUpdate = '畫面更新'
concreteKill.Add(new ConcreteUi(concreteKill))
concreteKill.Notify()




