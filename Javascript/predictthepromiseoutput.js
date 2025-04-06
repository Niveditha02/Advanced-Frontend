function fetchData(url){
      return new Promise(function (promise,reject){
         console.log("started downloading from",url);
         setTimeout(function processDownloading(){
            let data = "Dummy data";
            console.log("Download Completed");
            resolve(data);
         },7000);   
      });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv");
promiseObj.then(function A(value){
      console.log("value is",value);
});
console.log("end");