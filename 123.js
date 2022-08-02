/*const btn = document.querySelector(".button")
btn.adde=addEventListener("click",(e)=>
{
    e.preventDefault()
    console.log(e)
    document.querySelector("#my-form").style.background = "#ccc"
    document.querySelector("body").classList.add("bg-dark")
})
btn.adde=addEventListener("mouseover",(e)=>
{
    e.preventDefault()
    console.log(e)
    document.querySelector("#my-form").style.background = "#ccc"
    document.querySelector("body").classList.add("bg-dark")
})
btn.adde=addEventListener("mousout",(e)=>
{
    e.preventDefault()
    console.log(e)
    document.querySelector("#my-form").style.background = "#ccc"
    document.querySelector("body").classList.add("bg-dark")
})*/
const myForm=document.querySelector("#my-form")
const nameInput=document.querySelector("#name")
const emailInput=document.querySelector("#email")
const msg=document.querySelector(".msg")

myForm.addEventListener("submit",onSubmit)
function onSubmit(e)
{
    e.preventDefault()
    if( nameInput.value==" "||emailInput.value==" ")
    {
        msg.classList.add("Eror")
        msg.innerHTML="Please enter all field"

    }
    else{
        console.log(nameInput.value)
        console.log(emailInput.value)
    }
}