// 雖然簡單工廠內我們可以加入新的條件來增加預產出的實體，這要我們對擴展開放的但同時我們也對修改開放了，這樣違反了『開放-封閉原則』

class IFactory {
    CreateOpration() {}
}

class AddFactory extends IFactory {
    CreateOpration() {
        return new OperationAdd();
    }
}

class SubFactory extends IFactory {
    CreateOpration() {
        return new OperationSub();
    }
}

class MulFactory extends IFactory {
    CreateOpration() {
        return new OperationMul();
    }
}

class DivFactory extends IFactory {
    CreateOpration() {
        return new OperationDiv();
    }
}

let operFactory = new AddFactory();
let oper = AddFactory.CreateOpration();
