//須確認正確性？？？？？
class Singleton {
    static instance;
    static async GetInstance() {
        if (Singleton.instance == null) {
            try {
                Singleton.instance = await new Singleton();
            } catch {
                console.log("fail");
            }
        }
        return Singleton.instance;
        // 在同一時刻加了鎖的一部分執行緒可以進入
    }
}
// 用戶
let s1 = Singleton.GetInstance();
let s2 = Singleton.GetInstance();

if (s1 == s2) {
    console.log("兩個物件是相同實體");
}
