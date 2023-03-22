// class Staff {
//     constructor(affairTyep){
//         this.affairTyep = affairTyep
//     }
//     applyFor(target){
//         target.receiveApplyFor(this.affairType)
//     }
// }

// class Secretary {
//     constructor(){
//       this.leader = new Leader()
//     }
//     receiveApplyFor(affair){
//       this.leader.receiveApplyFor(affair)
//     }
//   }

//   //领导
//   class Leader {
//     receiveApplyFor(affair){
//       console.log(`批准:${affair}`)
//     }
//   }

//   const staff = new Staff('升职加薪')
//   staff.applyFor(new Secretary()) // 批准:升职加薪

// class Stock1 {
//     sell(){
//         console.log("股票1賣出");
//     }
//     buy(){
//         console.log("股票1買入")
//     }
// }

// class Stock2 {
//     sell(){
//         console.log("股票1賣出");
//     }
//     buy(){
//         console.log("股票1買入")
//     }
// }
// class Stock3 {
//     sell(){
//         console.log("股票1賣出");
//     }
//     buy(){
//         console.log("股票1買入")
//     }
// }
// class NationDebt1 {
//     sell(){
//         console.log("股票1賣出");
//     }
//     buy(){
//         console.log("股票1買入")
//     }
// }
// class NationDebt2 {
//     sell(){
//         console.log("股票1賣出");
//     }
//     buy(){
//         console.log("股票1買入")
//     }
// }

// class Fund {

//      constructor(){
//         this.stock1 = new Stock1();
//         this.stock2 = new Stock2();
//         this.stock3 =new Stock3();
//         this.nationDebt1 =new NationDebt1();
//         this.nationDebt2 =new NationDebt2();

//      }

//      BuyFund(){
//         this.stock1.buy()
//         this.stock2.buy()
//         this.stock3.buy()
//         this.nationDebt1.buy()
//         this.nationDebt2.buy()
//      }

//      SellFund(){
//         this.stock1.sell()
//         this.stock2.sell()
//         this.stock3.sell()
//         this.nationDebt1.sell()
//         this.nationDebt2.sell()
//      }
// }
// let fund = new Fund()
// fund.BuyFund()
// fund.SellFund()

class People {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHi() {
        console.log("Hi,my name is" + " " + this.name);
    }
    static getAge(age) {
        console.log("I am" + " " + age + " years olds.");
    }
}
//class == "function"

class Student extends People {
    constructor(name, age, gender) {
        super(); // { name: undefined, age: undefined, gender: undefined }
        this.name = name;
        this.age = age;
    }
    getAge() {
        super.getAge();
        console.log("我是子级类getName方法输出来的");
    }
}

let student1 = new Student("jacky", 23, "male");
Student.getAge(11);
