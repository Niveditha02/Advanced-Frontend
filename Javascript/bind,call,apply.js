
//case 1: Bind()
const player1 = {
      firstname: 'Virat',
      lastname:'Kohli',
      numberToBBat: 18,
      canBowl: false,
      getDetails: function(){
            console.log(this.firstname,this.lastname,"comes at No.",this.numberToBBat);
      }
}

const obj = function () {
      // console.log(this.getDetails());
      this.getDetails();
}

let x = obj.bind(player1);
console.log(x)
x();// obj is trying to access this, we can bind this of obj to another obj. This inside obj is point to player 1,
//console.log() is a function provided by the JavaScript runtime (like browsers or Node.js), but it behaves just like any normal JavaScript function.

//The real reason for the undefined is:

//this.getDetails() does a console.log(...) internally but does not return anything.

//Then you do console.log(this.getDetails()), which becomes console.log(undefined).

//call(),apply()
const player2 = {
      firstname1:'Hardik',
      lastname1:'Pandya',
      numberToBBat1:4,
      getDetails1:function(){
            console.log(this.firstname1,this.lastname1,"comes at no",this.numberToBBat1);
      }
}

const obj1 = function(x,y){
      console.log(x+y);
      this.getDetails1();
}

obj1.call(player2,2,45); //in call function u can pass any argument function after obj function 
obj1.apply(player2,[2,4]);