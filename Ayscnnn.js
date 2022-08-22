let posts = [{title:"1 post",body:"this is 1st post",createdat:new Date().getTime()},
{title:"2 post",body:"this is 2 post ",createdat:new Date().getTime()}]
var interval 

function getposts(){
    clearInterval(interval)
    var inter = setInterval(() => {
        let output = ``
        posts.forEach((post)=>{
            output = output+`<li>${post.title} created ${(new Date().getTime()-post.createdat)/1000} ago</li>`
        })
        document.body.innerHTML= output
        
    }, 1000);
    
    
}
async function createdelete(){
let  createpost =((post)=>{ 
    return new Promise((resolve,reject) =>{
    
        posts.push({...post,createdat:new Date().getTime()})
        let ne = true
        if(ne){
            let input=``
                posts.forEach((post)=>{
                    input+=`${post.title} , `
                   

                })
            resolve(input)
             
            
        }
        else{
            reject("Not solved")
        }
        
    })
})
    let create = await createpost({title:`3 post created`,body:`this is 3 post`})
    console.log(create)

    

    let deletepost = new Promise((res,rej) =>{
        setTimeout(()=>{
            if(val.length==0){
                rej("Array is empty now")
            }
          

        },1000)



    })
    let dele 
    try{
       dele = await deletepost
       val.pop()
       

    }
    catch{
        dele = "Array is empty now"
    }
    

    
            }




















function useractivity(){
    return new Promise((resolve, reject) => {
        let activetime= new Date()
        resolve(activetime)
        
    })
}
function update(){
    Promise.all([createpost({title:'4 post',body:'this is 4 post'}),useractivity()]).then(values=>(console.log(values)))
}

update()
del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))
createpost({title:'6 post',body:'this is 6 post'}).then(values=>console.log(values))







