class Target {
    Request(){
        console.log('普通請求')
    }
}

class Adaptee {
    SpecialRequest(){
        console.log('特殊請求')
    }

}

//Adaptee透過內部的物件，把原始介面轉換成目標界面
class Adapter extends Target{
    
    constructor(){
        super()
        this.adaptee = new Adaptee()
    }
    Request(){
        this.adaptee.SpecialRequest()
    }
}

// 用戶端
let target = new Adapter()
target.Request()
