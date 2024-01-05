let username=document.getElementById("username")
console.log(username)
let email=document.getElementById("email")
let password=document.getElementById("password")
let cpassword=document.getElementById("cpassword")
let form=document.getElementById("form")


form.addEventListener("submit",(e)=>{
    if(!validation())
    {
        e.preventDefault()
    }
   
})

function validation(){
    let username_value=username.value
    let email_value=email.value
    let password_value=password.value
    let cpassword_value=cpassword.value
    let success=true

    if(username_value==""){
        success=false
        set_error(username,"Please fill this box")
    }
    
}

function set_error(tag,message){
    let parentTag=tag.parentElement
    console.log(parentTag)
    let err=parentTag.querySelector("#error")
    err.innerText=message 
}

