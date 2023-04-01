// 從原本的簡單工廠變成，一個工廠抽象介面和多個具體產生物件的工廠。工廠方法爸簡單工廠的邏輯判斷移動到用戶端程式碼來進行
// 這樣才會符合『開放-封閉原則』
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

// 產生物件的工廠(畢業生)
class UndergraduateFactory extends IFactory {
    createCreateNightingale() {
        return new Undergraduate();
    }
}

// 產生物件的工廠(義工)
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
let ConcreteVolunteerFactory = new VolunteerFactory();
let ConcreteUndergraduateFactory = new UndergraduateFactory();
//user

// js中的反射
let factory = {
    // 方法還沒要執行
    Undergraduate: ConcreteUndergraduateFactory.createCreateNightingale,
    Volunteer: ConcreteVolunteerFactory.createCreateNightingale,
};

let studentA = factory["Undergraduate"]();

studentA.BuyRice();
studentA.Sweep();
studentA.Wash();
