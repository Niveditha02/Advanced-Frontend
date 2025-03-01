let obj1 = {};
console.log(obj1.toString());

let obj2={};
console.log(typeof obj2.toString());

//overriding two strings
let obj3 = {
      toString(){
            return "Lets learn javascript";
      }
};
console.log(obj3.toString());

//checking for valueof by overiding 
let obj4 = {x:10, valueof(){return 10}};
console.log(obj4.valueof());

//valueof by default returns same object
let obj = {valueof(){}};

let obj5 = {x:10};
console.log(typeof obj.valueOf());

let obj6 = {};
console.log(10 - obj6);

//More cases on Object with ToPrimitive and ToNumber
let obj7 = {};
console.log(10-obj7);
let obj8 = {x:8,y:9};
console.log(100 - obj8);
console.log("End");

let obj9 = {x:7,valueOf(){return 99}};
console.log(100 - obj9);

let obj10 = {x:8,toString(){return "88"}};
console.log(90 - obj10);





