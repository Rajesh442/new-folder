
    let num =1

switch (num) {
    case 1:
        console.log("a1")
        break;
    case 2:
        console.log('12')

    default:
        console.log('exit')
        
}

let arr= [1,3,'red',7,8,9]

for(let i=0; i<arr.length;i=i+1){
    console.log(arr[i])
}

//special looping for array
// for (let i of arr) {
// console.log(i)
// }

// arr.forEach( i => {
//     console.log(i)
// });


let obj = {id:1,color:'red'}
// special loop for object
for (const i in obj) {
    console.log(obj[i])
}