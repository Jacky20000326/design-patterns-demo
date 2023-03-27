class State {
    Handle(context){}
}

class ConcreteStateA extends State{
    Handle(context){
        context.State = new ConcreteStateB()
    }
}

class ConcreteStateB extends State{
    Handle(context){
        context.State = new ConcreteStateA()
    }
}

class Context {
    constructor(state){
        this.state = state
    }
    Request(){

        this.state.Handle(this)
    }
}

// 用戶端
let c = new Context(new ConcreteStateA())
c.Request()