//case 1: custom iterator
function fetchelementarray(array){
      let idx = 0;
      function next(){
            if(idx == array.length){
                  return undefined;
            }
            const nextElement = array[idx];
            idx++;
            return nextElement;
      }
      return next;
}

const automaticfetcher = fetchelementarray([1,2,3,4]);
console.log(automaticfetcher());
console.log(automaticfetcher());
console.log(automaticfetcher());
console.log(automaticfetcher());

//case 2: using value and done in iterators or inbuilt iterator
function fetchelementarray1(array){
      let idx1=0;
      function next1(){
            if(idx1 < array.length){
                  return {
                        value:array[idx1++],
                        done:false
                  };
            }else{
                  return{
                        value:undefined,
                        done:true
                  };
            }
      }
      return next1;
}
const automaticfetcher1 = fetchelementarray1([3,4,5,6,7,8,9]);
console.log(automaticfetcher1());
console.log(automaticfetcher1());
console.log(automaticfetcher1());
console.log(automaticfetcher1());
console.log(automaticfetcher1());
console.log(automaticfetcher1());
console.log(automaticfetcher1());


//In the above case1 and case2
//case1: idx == array.length is too late to stop. It allows the fetch of array[array.length] which is undefined.
//case2: idx < array.length is correct as it stops before going out of bounds. 