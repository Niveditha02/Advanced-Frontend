function createPromise(){
      return new Promise(function(resolve,reject){
            setTimeout(function fulfillHandler(value){
                  console.log("Rejecting the Promise");
                  reject("Done");
            },1000);
      });
}

let p = createPromise();
p.then(function fulfillHandler(value){
      console.log("we fulfilled1 with a value",value);
      reject("Done");
},function rejectionHandler1(value){
      console.log("we rejected1 with a value",value);
});
p.then(function fulfillHandler2(value){
      console.log("we rejected2 with a value",value);
},function rejectionHandler2(value){
      console.log("we rejected2 with a value", value);
});

for(let i=0;i<1000000;i++){
}
console.log("ending");