class Nightingale {
    Sweep() {
        console.log("掃地");
    }

    Wash() {
        console.log("洗衣");
    }
    BuyRice() {
        console.log("買米");
    }
}

class Undergraduate extends Nightingale {}

class Volunteer extends Nightingale {}

class IFactory {
    createCreateNightingale() {}
}

class UndergraduateFactory extends IFactory {
    createCreateNightingale() {
        return new Undergraduate();
    }
}

class VolunteerFactory extends IFactory {
    createCreateNightingale() {
        return new Volunteer();
    }
}

// class SimpleFactory {
//     static CreateNightingale(type) {
//         let result;
//         switch (type) {
//             case "學南丁格爾的大學生":
//                 result = new Undergraduate();
//                 break;

//             case "社會義工":
//                 result = new Volunteer();
//                 break;
//         }
//         return result;
//     }
// }

let factory = new UndergraduateFactory();
let studentA = factory.createCreateNightingale();
studentA.BuyRice();
