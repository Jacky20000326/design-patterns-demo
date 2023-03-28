class Iterator {
    //開始
    First() {}
    //下一個
    Next() {}
    // 判斷是否節尾
    IsDone() {}
    // 當前物件
    CurrentItem() {}
}

class Aggregate {
    CreateIterator() {}
}

class ConcreteIterator extends Iterator {
    constructor(aggregate) {
        super();
        this.aggregate = aggregate;
        this.current = 0;
    }
    //開始
    First() {
        return this.aggregate[0];
    }
    //下一個
    Next() {
        let ret = null;
        this.current++;
        if (this.current < this.aggregate.length) {
            ret = this.aggregate[this.current];
        }
        return ret;
    }
    // 判斷是否節尾
    IsDone() {
        return this.current >= this.aggregate.length ? true : false;
    }
    // 當前物件
    CurrentItem() {
        return this.aggregate[this.current];
    }
}

class ConcreteAggregate extends Aggregate {
    constructor() {
        super();
        this.List = [];
        this.Count = this.List.length;
    }
    CreateIterator() {
        return new ConcreteIterator(this);
    }
    setItem(index, value) {
        this.List[index] = value;
    }
}

let aggregate = new ConcreteAggregate();
aggregate.setItem(0, "大鳥");
aggregate.setItem(1, "小菜");
aggregate.setItem(2, "行李");
aggregate.setItem(3, "老外");

let iterator = new ConcreteIterator(aggregate.List);

let item = iterator.First();
while (!iterator.IsDone()) {
    console.log(`${iterator.CurrentItem()}請買車票`);
    iterator.Next();
}
console.log();
