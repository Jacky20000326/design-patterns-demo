class User {
    constructor(name = "Jacky", age = 23) {
        this.name = name;
        this.age = age;
    }
}

class Department {
    constructor(name = "程式") {
        this.name = name;
    }
}
class DataAccess {
    static db = "sqlserver";
    // static db = "Access";

    static CreateUser() {
        let userResult = null;

        switch (DataAccess.db) {
            case "sqlserver":
                userResult = new SqlserverUser();
                break;
            case "Access":
                userResult = new AccessUser();
        }

        return userResult;
    }

    static CreateDepartment() {
        let departmentResult = null;

        switch (DataAccess.db) {
            case "sqlserver":
                departmentResult = new SqlserverDepartment();
                break;
            case "Access":
                departmentResult = new AccessDepartment();
        }

        return departmentResult;
    }
}

class IUser {
    Insert() {}
    GetUser() {}
}

class IDepartment {
    Insert() {}
    GetUser() {}
}

class SqlserverDepartment extends IDepartment {
    Insert(user) {
        console.log("在sql server中給Department增加一條紀錄");
        console.log({ user });
    }
    Getdepartment(department) {
        console.log("在sql server根據ID得到Department表一條紀錄");
        console.log({ department });
    }
}

class AccessDepartment extends IDepartment {
    Insert() {
        console.log("在Access中給Department增加一條紀錄");
    }
    Getdepartment() {
        console.log("在Access根據ID得到Department表一條紀錄");
    }
}

class SqlserverUser extends IUser {
    Insert(user) {
        console.log("在sql server中給User標增加一條紀錄");
        console.log({ user });
    }
    GetUser(department) {
        console.log("在sql server根據ID得到User表一條紀錄");
        console.log({ department });
    }
}

class AccessUser extends IUser {
    Insert() {
        console.log("在Access中給User標增加一條紀錄");
    }
    GetUser() {
        console.log("在Access根據ID得到User表一條紀錄");
    }
}

// 抽象工廠
class IFacroty {
    CreateUser() {}
    CreateDepartment() {}
}

class SqlServerFactory extends IFacroty {
    CreateUser() {
        return new SqlserverUser();
    }
    CreateDepartment() {
        return new SqlserverDepartment();
    }
}

class AccessFactory extends IFacroty {
    CreateUser() {
        return new AccessUser();
    }
    CreateDepartment() {
        return new AccessDepartment();
    }
}

// 用戶
let user = new User();
let dept = new Department();

let iuser = DataAccess.CreateUser();
iuser.GetUser(user);
iuser.Insert(user);

let idepartment = DataAccess.CreateUser();
idepartment.GetUser(dept);
idepartment.Insert(dept);
