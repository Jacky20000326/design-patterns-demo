// class Secretary {

//     attach(observer){
//         observers.push(observer)
//     }

//     Notify(){
//         observers.forEach(item => {
//                 item.Update()
//         });
//     }

//     constructor(SecretaryAction = action){
//         this.SecretaryAction = SecretaryAction
//         this.observers = []
//     }
// }

// class StockObserver {
//     constructor(name,sub){
//         this.name = name
//         this.sub = sub
//     }

//     Update(){
//         console.log("")
//     }
// }

// let secretary = new Secretary()
// let staff = new StockObserver("Jacky")

// secretary.attach()


// ----- 觀察者模式 ------

// 主題(被觀察者)
class Subject {
    constructor(){
        this.observers = [];
    }
    Add(observer){
        this.observers.push(observer)
    }
    Detach(observer){
        this.observers.filter(item => item !== observer)
    }
    Notify(){
        this.observers.forEach(item =>item.Update() )
    }
}

class Observer {
    Update(){}
}

class ConcreteSubject extends Subject{
    constructor(subjectState){
        super()
        this.subjectState = subjectState
        // 被觀察者狀態
    }
}

class ConcreteObserver extends Observer  {
    constructor(subject,name){
        super()
        this.name = name;
        this.subject = subject;
    }

    Update(){
        this.observerState =  this.subject.subjectState
        console.log(`觀察者${this.name}的新狀態為${this.observerState}`)
    }

}

let ConcreteSubjectInstance = new ConcreteSubject()
ConcreteSubjectInstance.Add(new ConcreteObserver(ConcreteSubjectInstance,'x'))
ConcreteSubjectInstance.Add(new ConcreteObserver(ConcreteSubjectInstance,'y'))
ConcreteSubjectInstance.Add(new ConcreteObserver(ConcreteSubjectInstance,'z'))
ConcreteSubjectInstance.subjectState = "ABC"
ConcreteSubjectInstance.Notify()
