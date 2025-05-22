//The function can be called as many times as desired, and returns new generator each time, Each generator 
//may only iterated once.

function* fetchNextElement(){
      console.log("I am inside the generator function");
      yield 1;
      yield 2;
      console.log("somewhere in the middle");
      return 10;
      yield 3;
      yield 4;
}
const iter = fetchNextElement();
console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());
console.log("4rth",iter.next());

//case 2 function
function* fetchNextElement(){
      const x = 10;
      yield 11;
      console.log("entering after a yield");
      const y = x + (yield 30);
      console.log("value of y is",y);
}

const iter1 = fetchNextElement();
console.log("first",iter1.next());
console.log("second",iter1.next());



