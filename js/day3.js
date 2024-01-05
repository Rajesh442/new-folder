//object
//functions

let a={
    id:1,
    name:"raj",
    lastName:'ganesh',
    number:9003207747
}
console.log(a)
console.log(a['number'])
console.log(a.name)


let arr=[1,2,'java script','html','css', {id:2,name:'greens',number:8939915530} ,['java','react','angular'],{id:3,name:'ram',number:785412}]

console.log(arr)//printing overall array
console.log(arr[6]) // print 6th index of array
console.log(arr[6][1]) //printing the inner arrays 2nd element
console.log(arr[5].number) //printing the number from the object which is placed inside the array


// functions
/*parameterized
non-parameterized
function with return type
function with-out return type
arrow function
*/

//non-parameterized    
function add(){
    let a=12
    let b=54
    let c=a+b
    console.log(c+" method add ")
}
add()

//parameterized
function sub(){
    let a
    let b
    let c=a-b
    console.log(c+" method sub ")
}
sub(21)


//non-parameterized function with retun type
function multiple(){
    let a=2
    let b=12
    let c=a*b
    return c
}
console.log( multiple() )

//parameterized function with return type
function div(x,e){
    return x/e

}
console.log(div(21,6))

//arrow function    syntax    let methodname =()=>{}
let percentage = ()=>{
    let dicsountprize= 16
    let prize=252
    let output=(dicsountprize/prize)*100
    return output
}
console.log(percentage())






function convertor(){
    let cm=document.getElementsByTagName("input")[0].value
    let meter=cm/100
    document.getElementById("div1").innerHTML=`${meter}   meters`
}

