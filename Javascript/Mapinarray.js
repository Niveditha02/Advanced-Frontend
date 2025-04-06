/*Map is type of function that is used for arrays in JS.
It takes another function as argument
when to use map:In any situation when we have to do operation on every element of an array
and store the result of each operation. 
Map is good option*/
// function square(el){
//       return el*el;
// }
// const arr = [1,2,3,4,5];
// const resultofsquare = arr.map(square);
// console.log(resultofsquare);

//Returning element at the index
function print(element,i){
      return `Element at the ${i} is ${element}`;
}
const newArr = [8,9,10,11,12];
const result2 = newArr.map(print);
console.log(result2);

//Custom Mapper 
function customMapper(arr,func){
      let result= [];
      for (let i=0;i < arr.length;i++){
            result.push(func(arr[i],i));
      }
      return result;
}

const value= customMapper(newArr,print);
console.log(value);

//sorting array in increasing order
let b = [1,10,9,8,7,3,2];
b.sort(function(a,b){
      return a-b;
      //if a<b -> a-b will be negative -> if cmp function gives negative then a is placed before b (a<b)
      //if a>b -> a-b will be positive -> if cmp function gives positive then b is placed before a (a>b)
      //sort is a HOF, the sort function takes comparator function as argument
})
console.log(b);

