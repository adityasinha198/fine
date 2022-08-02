class User
{
    constructor(username,email,password,memtype)
    {
        this.username=username
        this.email=email
        this.password=password
        this.curdate = new Date()
        this.memtype = memtype
        
        

    }
    remembership()
    {
        if(this.memtype=="Standard")
        {
            
        }
    }
    static registeredUsers()
    {
       console.log("No of registered users are = ",c) 
    }
    register()
    {
        console.log(this.username +" is now registered ")
        c = c + 1
    }
}
let c=0;
const a = new User("Aditya","abc@gmail.com",123)
const b = new User("Shruti","bc@gmail.com",12453)
a.register()
b.register()
User.registeredUsers()