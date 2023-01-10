const objectHash = require("object-hash")

//case1
let obj1 = {
    car1 : 'hyundai',
    car2 : 'kia',
    premium_car : {car1:'bmw',
        car2:'audi'

    }
     
}
//string,number,boolean,bigint,null,undefined,symbol are not objects and all other things are objects in js

//case2 (constructor based syntax)
let obj2 = new Object()
obj2.bike1 = 'honda'
obj2.bike2 = 'tvs'

//case 3 
let powers = {
    fly : true,
    fight : false

}
let obj3 = Object.create(powers)
// console.log(obj3);
// console.log(Object.getPrototypeOf(obj3));
//{obj3 has takem all properties of power object in its properties}


//case4
let obj4 = Object.create({})
Object.defineProperty(obj4,"pens",{
    get: () => 'reynold',
    enumerable : true

})

// console.log(obj4.pens);
for(k in obj4){
    // console.log('value is' + k);
}

//part5
obj5 = {
    comics:'marvel',
    pen : '',
    printcomic : function(){
         this.pen += 'hi'
        //we cnt use this.pen in arrow function
         console.log(this);

    },


}
 console.log(obj5.printcomic());














