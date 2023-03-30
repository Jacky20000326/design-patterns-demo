class State {
    WriteProgram(w) {}
}
// 早
class MorningWorkState extends State {
    WriteProgram(w) {
        if (w.Hour < 12) {
            console.log(`當前時間${w.Hour}點上午工作`);
        } else {
            w.SetState(new middayWorkState());
            w.WriteProgram();
        }
    }
}
//中
class middayWorkState extends State {
    WriteProgram(w) {
        if (w.Hour < 13) {
            console.log(`當前時間${w.Hour}點中午工作`);
        } else {
            w.SetState(new AfternoonWorkState());
            w.WriteProgram();
        }
    }
}
// 下午
class AfternoonWorkState extends State {
    WriteProgram(w) {
        if (w.Hour < 17) {
            console.log(`當前時間${w.Hour}點中午工作`);
        } else {
            w.SetState(new NightWorkState());
            w.WriteProgram();
        }
    }
}

// 晚
class NightWorkState extends State {
    WriteProgram(w) {
        if (w.TaskFinished) {
            w.SetState(new RestState());
            w.WriteProgram();
        } else {
            if (w.Hour < 21) {
                console.log(`當前時間${w.Hour}點晚上工作`);
            } else {
                w.SetState(new SleepState());
                w.WriteProgram();
            }
        }
    }
}

// 睡眠
class SleepState extends State {
    WriteProgram(w) {
        console.log(`當前時間${w.Hour}要睡了`);
    }
}

// 下班休息
class RestState extends State {
    WriteProgram(w) {
        console.log(`當前時間${w.Hour}下班了`);
    }
}

// 工作
class Work {
    constructor() {
        this.current = new MorningWorkState();
        this.Hour = null;
        this.TaskFinished = false;
    }

    SetState(state) {
        this.current = state;
    }
    WriteProgram() {
        this.current.WriteProgram(this);
    }
}

// 用戶端
let emergencyProjects = new Work();
emergencyProjects.Hour = 9;
emergencyProjects.WriteProgram();
emergencyProjects.Hour = 10;
emergencyProjects.WriteProgram();
emergencyProjects.WriteProgram();
emergencyProjects.WriteProgram();
emergencyProjects.WriteProgram();
emergencyProjects.WriteProgram();
emergencyProjects.WriteProgram();
emergencyProjects.Hour = 12;
emergencyProjects.WriteProgram();
emergencyProjects.Hour = 13;
emergencyProjects.WriteProgram();
emergencyProjects.Hour = 14;
emergencyProjects.WriteProgram();
emergencyProjects.Hour = 17;
emergencyProjects.WriteProgram();

emergencyProjects.TaskFinished = true;
emergencyProjects.WriteProgram();
emergencyProjects.Hour = 19;
emergencyProjects.WriteProgram();
