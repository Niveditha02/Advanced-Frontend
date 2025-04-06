let arr = [1,10,9,100,1000,11,12,13,14,2,3];
arr.sort();//it sorts the given array // [expectation]->this might arrange elements in increasing order
//default implementation of arr.sort() is going to sort array is lexographical order
/**
 * 0=A,1=B,2=C,3=D,4=E,5=F,G=6,7=H,8=I,9=J, 
 */
console.log(arr);
//HOF is function wich takes another function as argument in the below as nithin is another function
function fun(x,fn){
      console.log(x,fn);
      fn();
}
fun(10,function nithin(){
      console.log("Hello Niveditha");
})