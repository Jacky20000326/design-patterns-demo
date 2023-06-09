class Singleton {
    constructor() {
        // 建構子設為private，堵死外建立用new 建立此類別實體的可能
    }
    static instance;
    static GetInstance() {
        if (Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// 用戶
let s1 = Singleton.GetInstance();
let s2 = Singleton.GetInstance();

if (s1 === s2) {
    console.log("兩個物件是相同實體");
}
// 物件不能產生另一個實體，只能有一個實體，
// 在引入js檔案被引入的檔案會直接視為獨體
