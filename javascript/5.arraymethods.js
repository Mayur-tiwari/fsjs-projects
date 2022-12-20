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

  let arr1 = [2,4,16,25,49,36]
let arr2 = [5,6,7,8]
let arr3 = [9,10]
console.log(arr1.concat(arr2,arr3));
fill
console.log(arr1.fill('mayur',2,5));

//includes
console.log(arr1.includes(5,4));

//indexof
console.log(arr1.indexOf(7));
//isarray
console.log(Array.isArray(arr1));
//join
console.log(arr1.join('and'));
//last index of
console.log(arr1.lastIndexOf(7));

//MAP
console.log(arr1.map(Math.sqrt));
// //pop
console.log(arr1.pop());
//reverse
console.log(arr1.reverse());
//shift
console.log(arr1.shift());
//sort
let arr2 = ['b','e','d','c','f','n','h']
console.log(arr2.sort());
//unshift
arr2.unshift("mayur","mayank");
console.log(arr2);
//making an array
let name = 'MAYUR';
let A = name.split('');
console.log(A);







