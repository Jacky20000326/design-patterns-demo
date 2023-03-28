class HandsetSoft {
    Run() {}
}

class HandsetBrand {
    SetHandsetSoft(soft) {
        this.soft = soft;
    }
    RunSoft() {}
}
class HandsetGame extends HandsetSoft {
    Run() {
        console.log("執行手機遊戲");
    }
}
class HandsetAddressList extends HandsetSoft {
    Run() {
        console.log("執行手機通訊錄");
    }
}

class HandsetBrandN extends HandsetBrand {
    RunSoft() {
        this.soft.Run();
    }
}

class HandsetBrandM extends HandsetBrand {
    RunSoft() {
        this.soft.Run();
    }
}

// 用戶端
let phone1 = new HandsetBrandN();
phone1.SetHandsetSoft(new HandsetGame());
phone1.RunSoft();

phone1.SetHandsetSoft(new HandsetAddressList());
phone1.RunSoft();

let phone2 = new HandsetBrandM();
phone2.SetHandsetSoft(new HandsetGame());
phone2.RunSoft();

phone2.SetHandsetSoft(new HandsetAddressList());
phone2.RunSoft();
