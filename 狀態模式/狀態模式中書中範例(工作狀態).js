class State {
    // 顯示的數值
    tempToDisplay(temperture) {}
    vibToDisplay(vibration) {}
    // 儲存的數值
    tempToSave(temperture) {}
    vibToSave(vibration) {}
}

// 公制的State
class Metric extends State {
    // 顯示的數值
    tempToDisplay(temperture) {
        console.log("顯示公制");
        return temperture;
    }
    vibToDisplay(vibration) {
        console.log("顯示公制");
        return vibration;
    }
    // 儲存的數值
    tempToSave(temperture) {
        console.log("儲存公制");
    }
    vibToSave(vibration) {
        console.log("儲存公制");
    }
}

// 英制的State
class British extends State {
    // 顯示的數值
    tempToDisplay(temperture) {
        console.log("顯示英制除二就好");
        console.log(temperture);
        return temperture / 2;
    }
    vibToDisplay(vibration) {
        console.log("顯示英制除三就好");
        return temperture / 3;
    }
    // 儲存的數值
    tempToSave(temperture) {
        console.log("儲存英制");
    }
    vibToSave(vibration) {
        console.log("儲存英制");
    }
}

class MetricSystem {
    SetState(state) {
        this.state = state;
    }
    tempView(temp) {
        this.state.tempToDisplay(temp);
    }
    vibView(vib) {
        this.state.vibToDisplay(vib);
    }
    tempSave(temp) {
        this.state.tempToSave();
    }
    vibSave() {
        this.state.vibToSave();
    }
}

let metricSystem = new MetricSystem();
metricSystem.SetState(new British());
console.log(metricSystem.tempView(30));
