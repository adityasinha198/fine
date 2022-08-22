class Student{
   
    constructor(name,age,phno,marks)
    {
        this.name = name
        this.age=age
        this.phno = phno
        this.marks = marks
        count =  count+1
        
    }
    eligible(){
        if(this.marks>40){
            return "Eligible"
        }
        else{
            return "Not eligible"
        }
    }
    sum(){
        return count
    }
    placemarks(pmarks){
        var placeage = (page)=>{
            if(this.age>page && this.marks>pmarks){
                console.log(this.name+" is eligible")
                return true
            }else{
                return false
            }
        }
        return placeage
    }


}
let count = 0
let s1= new Student("Adi",22,77777777,97)
let s2= new Student("Ram",22,777,43)
let s3= new Student("Aakash",22,77777777,39)
let s4= new Student("Shubham",22,77777777,94)
let s5= new Student("Tanmay",22,77777777,66)
console.log(s5.placemarks(50)(20))

