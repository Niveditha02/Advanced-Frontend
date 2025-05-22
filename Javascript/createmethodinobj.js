let obj = {
      x:1,y:2
}

// let another = obj;
// another.x = 89;
// console.log(another,obj);
const newobj = Object.create(obj);
newobj.x = 99;
console.log(newobj,obj);