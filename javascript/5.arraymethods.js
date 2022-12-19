 let names = ['billu','maaru','mayank','mayur','tillu',];
console.log(names);
//length
console.log(names.length);
//specific element
console.log(names[2]);
//last element
console.log(names[names.length-1]);
replacing n element
names[2] = 'shanaya';
console.log(names);
//inserting new value
names.push('ram');
console.log(names);
//accesing multiple values through slice
console.log(names.slice(1,4));
//splice
let fruit = ['apple','banana','orange','watermelon'];
fruit.splice(2,2,'grapes','chiku');
 console.log(fruit);
//concatenation

 let arr1 = [1,2,3,4,5,7,8]
let arr2 = [5,6,7,8]
let arr3 = [9,10]
console.log(arr1.concat(arr2,arr3));
fill
console.log(arr1.fill('mayur',2,5));

//includes
console.log(arr1.includes(5,7));






