const { async } = require("postcss-js");

// if/else
let n = 17;

if(n>=18){
    console.log('u r allowed');
}
else{
    console.log('out');
}

// switch case
let user = 'pillu' 
switch(user){
    case 'admin' : 
    console.log('redirect to admin');
    break;
    case "student":
        console.log('redirect to student');
        break;
    default:
        console.log('i am visiter');

}

// ternary operator

let raining = false;

raining ? console.log('its raining') : console.log('its not raining');

