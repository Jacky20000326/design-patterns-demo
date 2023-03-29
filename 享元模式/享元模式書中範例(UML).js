class Flyweight {
    Operation(extrinsicstate) {}
}
class ConcreteFlyweight extends Flyweight {
    Operation(extrinsicstate) {
        console.log("具體Flyweight" + extrinsicstate);
    }
}

class UnsharedConcreteFlyweight extends Flyweight {
    // 可以解決不需要共用物件的問題
    Operation(extrinsicstate) {
        console.log("不共用的具體Flyweight" + extrinsicstate);
    }
}

class FlyweightFactory {
    constructor() {
        this.flyweights = {};
        // 也可以初始化什麼都不做，爆需要時再判斷物件是否為null，再來決定不要實體化
        this.flyweights.x = new ConcreteFlyweight();
        this.flyweights.y = new ConcreteFlyweight();
        this.flyweights.z = new ConcreteFlyweight();
    }

    GetFlyweight(key) {
        return this.flyweights[key];
    }
}

let entrinsicstate = 22;
let f = new FlyweightFactory();
let fs = f.GetFlyweight("x");
fs.Operation(entrinsicstate);

let fy = f.GetFlyweight("y");
fy.Operation(entrinsicstate);

let fz = f.GetFlyweight("z");
fz.Operation(entrinsicstate);

let uf = new UnsharedConcreteFlyweight();
uf.Operation(entrinsicstate);
