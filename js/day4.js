// operators
/* 
    arithmetic operator   ==> +, -, *, /, %
    logical operator    ==> &&, ||
    assignment operator ==> =,+=, -=, *=, /=, %=
    comparison operator ==> <, >, <=, >=,!=, ==, ===,!==      relational operator
    bitwise operator    ==> &, |, ^, ~, >>, <<,<<<,>>>
    terniry operator    ==> ()? "true": "false"


*/

let a=17//assignment operator =
let b=3
let c=a%b 
console.log(c)

c *= a
console.log(c)

let age=18
//ternary operator    and comparison operator
let vote =  (age >= 18)? "eligible to vote" :" not eligible to vote"
console.log(vote)


let num= "13"
let result = ( num === 13) ?"both are equal ": "both are not equal"
//== check wether values are equal or not 
//=== checks both value and data type are equal
console.log(result)


let num1="13"
let result1= ( num1 !== 13) ?" not both are equal ": "both are equal"
console.log(result1 +" result of !=")

//logical operator
/*90-100 a grade
80-90 b grade
70 -80 c grade */
let mark=  97
let result5= (mark > 80 || mark<90 )? "grade  B": "fail"
console.log(result5)


let a1=15
let b1=17
let c1=a1 ^ b1
console.log(c1)


let leftshift =13 << 2
console.log(leftshift)


let rightshift= 15>>> 2
console.log(rightshift)
