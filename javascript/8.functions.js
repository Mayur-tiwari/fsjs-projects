const { CHAR_PLUS } = require("picomatch/lib/constants");
const { Result } = require("postcss");

function add1() {
    a = 1;
    b = 2 ;
    console.log('sum of a and b is ' + (a + b));
    
}
add1();

//fn with argument

function add2(arg1,arg2) {
    console.log('sum of a and b is ' + (arg1+arg2));
    
}
add2(20,30);

//fn with return value

// function add3(argg1,argg2) {
//      let result = argg1 + argg2;
//     return result;
    
// }
// let plus = add3(8,7);
// console.log(plus);

// //passing an array in a function

function sum(arr4) {
    let sum = 0;
    for (let i = 0; i < arr4.length; i++){
             sum = sum +arr4[i];
            }
            return sum
    
}
let arrayy = [1,2,3,4,5,6,7,8,9];
 let Q = sum(arrayy) ;
 console.log(Q);

//arrow function
let munna = (x,y) => {
    console.log('hello '+ x + y);

}
munna(7,8)

