function EvenorOdd(ele){
      return (ele%2==0);//it eturns boolean
}
let arr = [1,2,3,4,5,6,7,8];
const result = arr.filter(EvenorOdd);
console.log(result);
