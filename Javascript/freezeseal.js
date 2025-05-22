let arr = [1,2,3,4];
console.log(typeof arr);

let obj = {
      x:10,
      y:20
};
Object.freeze(obj);// In object.freeze neither we can update old property nor update new one
obj.z = 20;
console.log(obj);

let obj1 = {
      x: 10,
      y: 20
}

Object.seal(obj1);//object.seal you cannot add new property but u can update old property
obj1.x = 30;
obj1.y = 99;
console.log(obj1);

const obj2 = {
      x:1, y:2
}

obj2.x = 10;
obj2.z = 90;
console.log(obj2);