let a=15<<2
console.log(a)
let b=15>>2
console.log(b)

let c=18 >>> 2
console.log(c)


// type conversion 
/*
string 
tostring
number
parseint 
parsefloat

*/

let str1= String(12334)
console.log(str1)
console.log(typeof str1)

let str2= toString(null)
console.log(str2)
console.log(typeof str2)


let str3= "1234"
console.log(str3)
console.log(typeof str3)

let str4= Number(str3)
console.log(str4)
console.log(typeof str4)

let str5 ="78.48qwert876yuio4521"
let str6= parseInt(str5)
console.log(str6)
console.log(typeof str6)

let str7=parseFloat(str5)
console.log(str7)
console.log(typeof str7)





function add(){
    let a=43
    let b=12
    let c=a+b 
    console.log(c)
    return c

}

function sub (add){
    let d=20
    let e=add-d
    console.log(e)
}

sub(add())












