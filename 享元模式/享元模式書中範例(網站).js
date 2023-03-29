class WebSite {
    Use() {}
}
// 將用戶資料拆出享元外部
class User {
    constructor(name) {
        this.name = name;
    }
}

class ConcreteWebsite extends WebSite {
    constructor(name) {
        super();
        this.name = name;
    }
    Use(user) {
        console.log("網站分類" + this.name + "用戶" + user.name);
    }
}

class WebsireFactory {
    constructor() {
        this.flyWeight = {};
    }
    GetWebsiteCategoty(key) {
        if (!this.flyWeight[key]) this.flyWeight[key] = new ConcreteWebsite(key);
        return this.flyWeight[key];
    }
    GetWebsiteCount() {
        return Object.keys(this.flyWeight).length;
    }
}

let f = new WebsireFactory();
let fx = f.GetWebsiteCategoty("產品展示");
fx.Use(new User("小菜"));

let fy = f.GetWebsiteCategoty("產品展示");
fy.Use(new User("大鳥"));

let fz = f.GetWebsiteCategoty("產品展示");
fz.Use(new User("大鳥鳥"));

let fl = f.GetWebsiteCategoty("部落格");
fz.Use(new User("大鳥鳥鳥"));

let fm = f.GetWebsiteCategoty("部落格");
fm.Use(new User("大鳥鳥鳥鳥"));
let fn = f.GetWebsiteCategoty("部落格");
fn.Use(new User("大鳥鳥鳥鳥鳥"));

console.log(`網站翻類種數為${f.GetWebsiteCount()}`);
