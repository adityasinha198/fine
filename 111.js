function a(x)
{
     var b = (y)=>{
        console.log(x+y)
    }
    return b
}

a(2)(3)
function p(i)
{
     return function q(j){
        console.log(i+j)
    }
    
}
p(5)(5)