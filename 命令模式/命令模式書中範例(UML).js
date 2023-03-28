class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }
    Execute() {}
}

class ConcreteCommand extends Command {
    constructor(receiver) {
        super(receiver);
    }

    Execute() {
        this.receiver.Action();
    }
}

class Invoker {
    // 接收命令
    SetCommand(command) {
        this.command = command;
    }
    // 執行命令
    ExecuteCommand() {
        this.command.Execute();
    }
}

class Receiver {
    Action() {
        console.log("執行請求");
    }
}

let r = new Receiver();
let c = new ConcreteCommand(r);

let i = new Invoker();

i.SetCommand(c);
i.ExecuteCommand();
