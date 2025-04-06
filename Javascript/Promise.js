//example for resolve or reject  of promise based on random i/p
function getRandomInt(max){
      return Math.floor(Math.random()*max);
}

function createPromise(){
      return new Promise((resolve, reject)=>{
            for(let i=0;i<100;i++){
                  let num= getRandomInt(10);
                  if(num % 2 == 0){
                        //if random no is even then we resolve
                        resolve(num);
                  }else{
                        //if random no is odd then reject 
                        reject(num);
                  }
            }
            })
}

x = createPromise();
console.log(x);

//example for pending of promise based on random i/p
function getRandomInt(max){
      return Math.floor(Math.random()*max);
}

function createPromise(){
      return new Promise(function executer(resolve, reject){
            setTimeout(function(){
                  let num= getRandomInt(10);
                  if(num % 2 == 0){
                        //if random no is even then we resolve
                        resolve(num);
                  }else{
                        //if random no is odd then reject 
                        reject(num);
                  }
            },10000);
      });       
}

y = createPromise();
console.log(y);
console.log("niveditha");

