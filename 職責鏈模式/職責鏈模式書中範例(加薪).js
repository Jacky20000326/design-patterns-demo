class Request {
    constructor(requestType, requestContent, number) {
        this.RequestType = requestType;
        this.RequestContent = requestContent;
        this.Number = number;
    }
}
class Manager {
    constructor(name) {
        this.name = name;
    }
    // 設定管理者的上級
    SetSuperior(superior) {
        this.superior = superior;
    }
    //申請請求
    RequestApplications(request) {}
}

class CommonManager extends Manager {
    constructor(name) {
        super(name);
    }

    RequestApplications(request) {
        if (request.RequestType == "請假" && request.Number <= 2) {
            console.log(`${this.name}:${request.RequestContent}數量${request.Number}被批准`);
        } else {
            if (this.superior != null) {
                this.superior.RequestApplications(request);
            }
        }
    }
}

class Majordomo extends Manager {
    constructor(name) {
        super(name);
    }

    RequestApplications(request) {
        if (request.RequestType == "請假" && request.Number <= 5) {
            console.log(`${this.name}:${request.RequestContent}數量${request.Number}被批准`);
        } else {
            if (this.superior != null) {
                this.superior.RequestApplications(request);
            }
        }
    }
}
class GeneralManage extends Manager {
    constructor(name) {
        super(name);
    }

    RequestApplications(request) {
        if (request.RequestType == "請假") {
            console.log(`${this.name}:${request.RequestContent}數量${request.Number}被批准`);
        } else if (request.RequestType == "請假" && request.Number <= 500) {
            if (this.superior != null) {
                this.superior.RequestApplications(request);
                console.log(`${this.name}:${request.RequestContent}數量${request.Number}被批准`);
            }
        } else if (request.RequestType == "請假" && request.Number > 500) {
            if (this.superior != null) {
                this.superior.RequestApplications(request);
                console.log(`${this.name}:${request.RequestContent}數量${request.Number}再說吧`);
            }
        }
    }
}
let jinli = new CommonManager("金利");
let Jacky = new Majordomo("傑奇");
let Jack = new GeneralManage("傑克");

jinli.SetSuperior(Jacky);
Jacky.SetSuperior(Jack);

let request = new Request();
request.RequestType = "請假";
request.RequestContent = "小菜請求加薪";
request.Number = 500;
jinli.RequestApplications(request);
