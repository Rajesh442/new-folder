function mouse(){
    document.getElementById('h1').style.color="blue"
}

function mouseremove(){
    document.getElementById('h1').style.color='black'
}

function hyper(){
    document.getElementsByTagName('a')[0].style.color='black'
    document.getElementsByTagName('a')[0].style.backgroundColor='gray'
}

function double(){
    document.getElementsByTagName('p')[0].style.backgroundColor='blue'
}


function inputText(){
    let input = document.getElementById('input').value
    console.log(input)
    document.getElementsByTagName('p')[0].style.color= input

}

function keyPress(){
    document.getElementsByTagName('h2')[0].style.color= 'red'

}


function down(){
    document.getElementsByTagName('h2')[0].style.color= 'red'

}


function up(){
    document.getElementsByTagName('h2')[0].style.color= ''

}

button.addEventListener('click',click1);

function click1(){
    document.getElementsByTagName('h2')[0].style.backgroundColor= 'skyblue'

}

function ticketbooking(){

     return new Promise((resolve,reject)=>{
    let bookingamount=334

    if(bookingamount < 500 ){
        //setTimeout(resolve,5000,'your ticket booked successfully')
       setTimeout( ()=>{
        resolve('your ticket booked successfully')
       },5000)
    }
    else{
        reject()
    }

})
}
ticketbooking().then( (message)=>{console.log(message)} )

.catch( ()=>{console.log('your ticket booking failed') } )
/*
function success(){
    console.log('your ticket booked successfully')
}o
function failed(){
    console.log('your ticket booking failed')
}
*/

async function bookingUpdate(){
    let update=await ticketbooking()
    console.log(update + "  new update")

}
bookingUpdate()




let a='wertyujjsdf'
console.log(a.length)
console.log(a[10])
let b= a.slice(0,a.length-1)
console.log(b)

function del(){
    let input= document.getElementById('result').value
    let output= input.slice(0,input.length-1)
    document.getElementById('result').value=output
}
















