
//prime number
let num=15
let count=0

for(let i=2;i<num;i=i+1){ //i=3 1=4 i=5 i=6 .......1=14

    if(num%i==0)// 15%2==1   15%3==0 15%4==3   15%5==0  15%6==3   15%14==1
    {
        console.log(num +" divided by "+ i)
        count=count+1 // c=1 i=3/ c=2 i=5/  
    }
}

if(count==0)
{
    console.log('prime')
}
else{
    console.log('not a prime')
}

let a=12212
let str1= toString(a)
console.log(str1)

function convertor(){
    let tag= document.getElementById("A1")
    console.log(tag)
    let input1= tag.value 
    console.log(input1+" input 1")
    let output = input1/100
    document.getElementById("result").innerHTML=`${output} meters`
}

function convertor1(){
    let tag= document.getElementById("A2")
    let input1= tag.value 
    let output = input1/1000
    document.getElementById("A2").value=`${output} kilometers`

}


console.log(Math.sqrt(9))
console.log(Math.cbrt(64))


/*
function method1(){
    let input= document.getElementById("A2").value
    let output=input*100 
    document.getElementById("A2").value=`${output} millimeters`
}
function method2(){
    let input= document.getElementById("A2").value
    let output=input/100 
    document.getElementById("A2").value=`${output} meters`
}
function method3(){
    let input= document.getElementById("A2").value
    let output=input/100000
    document.getElementById("A2").value=`${output} kilometers`
}*/


function main(a){
    if(a=='mm'){
        let input= document.getElementById("A2").value
        let output=input*100 
        document.getElementById("A2").value=`${output} millimeters`
    }
    
    else if(a=='m')
    {
        let input= document.getElementById("A2").value
        let output=input/100 
        document.getElementById("A2").value=`${output} meters` 
    }

    else if(a=='km'){
    let input= document.getElementById("A2").value
    let output=input/100000
    document.getElementById("A2").value=`${output} kilometers`
    }
}










