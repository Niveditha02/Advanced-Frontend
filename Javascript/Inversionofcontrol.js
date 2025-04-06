let arr = [1,10,1000,9,2,3,11];
arr.sort(function cmp(a,b){
      return a-b;
})
console.log(arr);

function doTask(fn,x){
      fn(x*x);
}

doTask(function exec(num){
      console.log("Woah num is",num);
},9);