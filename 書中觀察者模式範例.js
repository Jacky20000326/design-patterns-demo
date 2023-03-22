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
        // 被觀察者初始化時把觀察者的實例丟進subject裡面了
        this.subject = subject;
        this.name = name;
       
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
