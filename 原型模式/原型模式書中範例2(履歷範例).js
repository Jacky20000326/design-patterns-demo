class Prototype {
    clone() {}
}

// 將工作經歷拆成類
class WorkExerience extends Prototype {
    constructor(workData, company) {
        super();
        this.workData = workData;
        this.company = company;
    }
    Clone() {
        return Object.assign(this);
    }
}

class Resume extends Prototype {
    constructor(name) {
        super();
        this.name = name;
        // 工作經歷(clone)
        this.work = new WorkExerience();
    }
    // 設定個人資料

    SetPersonalInfo(sex, age) {
        this.sex = sex;
        this.age = age;
    }
    // 設定工作經歷
    SetWorkExerience(workData, company) {
        this.work.workData = workData;
        this.work.company = company;
    }

    //顯示
    display() {
        console.log(`${this.name} ${this.sex} ${this.age}`);
        console.log(`工作經歷${this.work.workData}${this.work.company}`);
    }

    Clone() {
        let CloneObj;
        CloneObj = new Resume();

        CloneObj.name = this.name;
        CloneObj.sex = this.sex;
        CloneObj.age = this.age;
        // console.log(Object.assign(this)); 如果屬性的值是對象或數組，則會進行淺拷貝，即目標對象中的屬性會引用源對象中的同一對象或數組。
        return CloneObj;
    }
}

let personAResume = new Resume("大鳥");

personAResume.SetPersonalInfo("男", 29);
personAResume.SetWorkExerience("1998-2000", "XX企業");

let personBResume = personAResume.Clone();
personBResume.name = "小鳥";
personBResume.SetWorkExerience("1998-2006", "YY企業");
personBResume.SetPersonalInfo("男", 32);

let personCResume = personAResume.Clone();
personCResume.name = "鳥鳥";
personCResume.SetPersonalInfo("女", 30);
personCResume.SetWorkExerience("1998-2006", "YY企業");
// 顯示各person顯示
personAResume.display();
personBResume.display();
personCResume.display();
