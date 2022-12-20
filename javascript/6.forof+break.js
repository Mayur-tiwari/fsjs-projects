//for of loop
let fruit = ['apple','banana','orange','watermelon'];
let uppercase = [];
for( varname of fruit){
    uppercase.push(varname.toUpperCase())
};
console.log(uppercase);
//BREAK/CONTINUE

for (let i = 0; i <=5; i++) {
    if (i == 3) {
    continue;
}
    console.log(i);
}