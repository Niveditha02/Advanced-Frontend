//object is nothing but key value pair in js,objects are mutable 
let x = {name:"Niveditha",age:23};
let y = {
      name:"Nithin",
      age:19
};
console.log(x["name"]);// whenever you have to access value inside suare bracket use double quotes
console.log(y.name);
x.age = 26;
console.log(x["age"]);
x.address="Kokkapuni";
console.log(x);
delete x.age;
console.log(x);

let obj = {};
console.log(obj.toString());
