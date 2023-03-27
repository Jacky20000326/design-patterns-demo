class IUser  {
    Insert(user){}
    GetUser(id){}
}

class IDepartment {
    Insert(user){}
    GetDepartment(){}
}

class SqlServerDepartment extends IDepartment{
    Insert(user){
        console.log('在sql server中給Department增加一條紀錄')
    }
    GetDepartment(){
        console.log('在sql server中根據得到的id得到Department表一條紀錄')
    }
}

class AccessDepartment extends IDepartment{
    Insert(user){
        console.log('在Access中給Department增加一條紀錄')
    }
    GetDepartment(){
        console.log('在Access中根據得到的id得到Department表一條紀錄')
    }
}

class SqlServerUser extends IUser{
    Insert(user){
        console.log('在sql server中給user增加一條紀錄')
    }
    GetUser(id){
        console.log('在sql server中根據得到的id得到User表一條紀錄')
    }
}

class AccessUser extends IUser{
    Insert(user){
        console.log('在AccessUser中給user增加一條紀錄')
    }
    GetUser(id){
        console.log('在AccessUser中根據得到的id得到User表一條紀錄')
    }
}

class IFactory {
    CreateUserFactory(){}
    CreateDepartmentFactory(){}
}

class SqlServerUserFactory extends IFactory{
    CreateUserFactory(){
        return new SqlServerUser()
    }
    CreateUserFactory(){
        return new SqlServerDepartment()
    }
}
class AccessUserUserFactory extends IFactory{
    CreateUserFactory(){
        return new AccessUser()
    }
    CreateUserFactory(){
        return new AccessDepartment()
    }
}



// 用戶端程式碼
let ConcreteSqlServerUserFactory = new SqlServerUserFactory()
let getSqlServerUser = ConcreteSqlServerUserFactory.CreateUserFactory()

getSqlServerUser.Insert()
getSqlServerUser.GetUser()