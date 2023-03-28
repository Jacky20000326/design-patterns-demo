class Player {
    constructor(name) {
        this.name = name;
    }
    Attack() {}
    Defense() {}
}

// 前、中、後峰
class Forwards extends Player {
    constructor(name) {
        super(name);
    }
    Attack() {
        console.log(`前鋒${this.name}進攻`);
    }
    Defense() {
        console.log(`前鋒${this.name}防守`);
    }
}
class Center extends Player {
    constructor() {
        super();
    }
    Attack() {
        console.log(`中鋒${this.name}進攻`);
    }
    Defense() {
        console.log(`中鋒${this.name}防守`);
    }
}

class Guards extends Player {
    constructor() {
        super();
    }
    Attack() {
        console.log(`後鋒${this.name}進攻`);
    }
    Defense() {
        console.log(`後鋒${this.name}防守`);
    }
}

// 外籍中鋒
class ForeignCenter {
    constructor(name = "no body") {
        this.name = name;
    }
    進攻() {
        console.log(`外籍中鋒${this.name}進攻`);
    }
    防守() {
        console.log(`外籍中鋒${this.name}防守`);
    }
}

// 翻譯者
class Translator extends Player {
    constructor(name) {
        super(name);
        this.ForeignCenterPlayer = new ForeignCenter();
        this.ForeignCenterPlayer.name = name;
    }
    Attack() {
        this.ForeignCenterPlayer.進攻();
    }
    Defense() {
        this.ForeignCenterPlayer.防守();
    }
}

let b = new Forwards("巴蒂爾");
let m = new Forwards("麥克爾雷迪");
let ym = new Translator("姚明");

b.Attack();
m.Attack();
ym.Attack();
ym.Defense();
