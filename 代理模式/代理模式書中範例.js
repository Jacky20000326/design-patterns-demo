class Subject {
    Request() {}
}

class RealSunject extends Subject {
    Request() {
        console.log("真實的請求");
    }
}
class Proxy extends Subject {
    Request() {
        if (this.RealSunject == null) {
            this.RealSunject = new RealSunject();
        }
        this.RealSunject.Request();
    }
}

let proxy = new Proxy();
proxy.Request();
