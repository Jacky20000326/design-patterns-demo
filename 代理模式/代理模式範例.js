class IMacSeller {
    buy() {}
}

class USASeller extends IMacSeller {
    buy() {
        console.log("買一台蘋果電腦");
    }
}

class TaiwanProxySeller extends IMacSeller {
    concreteUSASeller = new USASeller();
    // 還是需要透過美國買家購買
    buy() {
        this.concreteUSASeller.buy();
    }
}

let concreteTaiwanProxySeller = new TaiwanProxySeller();

concreteTaiwanProxySeller.buy();
