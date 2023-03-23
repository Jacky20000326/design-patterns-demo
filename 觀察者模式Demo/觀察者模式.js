let observer_ids = 0;
let observed_ids = 0;

//  當被觀察者有變動時會通知觀察者

// 觀察者
class Observe {
    constructor() {
        this.id = observer_ids++;
    }
    update(ob) {
        console.log("观察者" + this.id + `-检测到被观察者${ob.id}变化`);
    }
}

//被观察者列
class Observed {
    constructor() {
        this.list = [];
        this.id = observed_ids++;
    }
    //添加观察者(把觀察者加到list)
    addObserver(observer) {
        this.list.push(observer);
    }
    //删除观察者(把觀察者從list移除)
    removeObserver(observer) {
        this.list = this.list.filter((o) => {
            return o.id != observer.id;
        });
    }
    //通知所有的观察者
    notify() {
        this.list.forEach((observer) => {
            observer.update(this);
        });
    }
}

class Teacher extends Observe {
    constructor(name) {
        super();
        this.name = name;
    }
    update(st) {
        //   super.update(st);
        console.log(st.name + `提交了${this.name}作业`);
    }
}

class Student extends Observed {
    constructor(name) {
        super();
        this.name = name;
    }
    submitHomeWork() {
        this.notify(this);
    }
}
let teacher1 = new Teacher("数学");
let teacher2 = new Teacher("语文");
let stu1 = new Student("小玲");
let stu2 = new Student("小明");
let stu3 = new Student("小李");
stu1.addObserver(teacher1);
stu1.addObserver(teacher2);
stu2.addObserver(teacher1);
stu2.addObserver(teacher2);
stu3.addObserver(teacher1);
stu3.addObserver(teacher2);

stu1.submitHomeWork();
stu2.submitHomeWork();
stu3.submitHomeWork();
