// 工廠範例(簡單計算機)

//  工廠
class Operation {
    constructor(numberA = 0, numberB = 0) {
        this.numberA = numberA;
        this.numberB = numberB;
    }

    getResult() {
        let result = 0;
        return result;
    }
    // 透果判斷產生需要的實體
    static createOperation(operator) {
        let oper = null;
        //當需要在類別創建實例之前執行一些初始化操作時，可以使用靜態區塊定義這些操作。
        //靜態區塊在類別被載入時就會執行，而不需要等到實例化。
        switch (operator) {
            case "+":
                oper = new OperationAdd();
                break;
            case "-":
                oper = new OperationSub();
                break;
            case "*":
                oper = new OperationMul();
                break;
            case "/":
                oper = new OperationDiv();
                break;
        }
        return oper;
    }
}

class OperationAdd extends Operation {
    getResult() {
        let result = 0;
        result = this.numberA + this.numberB;
        return result;
    }
}

class OperationSub extends Operation {
    getResult() {
        let result = 0;
        result = this.numberA - this.numberB;
        console.log(result);
        return result;
    }
}
class OperationMul extends Operation {
    getResult() {
        let result = 0;
        result = this.numberA * this.numberB;
        return result;
    }
}

class OperationDiv extends Operation {
    getResult() {
        let result = 0;
        if (this.numberB == 0) {
            console.log("除法不能為0");
            return;
        }
        result = this.numberA / this.numberB;
        return result;
    }
}

let Oper = Operation.createOperation("-");
Oper.numberA = 200;
Oper.numberB = 20;
Oper.getResult();
