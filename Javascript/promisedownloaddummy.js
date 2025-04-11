function download(url){
      console.log("started downloading content from",url);
      return new Promise(function exec(res,rej){
            setTimeout(function p(){
                  console.log("Completed downloading data in 5s");
                  const content = "ABCDEF";
                  res(content);
            },5000);
      });
}

// download("www.xyz.com")
// .then(function fulfillhandler(value){
//       console.log("content downloaded is",value);//here using promises we are not giving access to te third paty function like as in example callbackdownload.js
// })

//dot.then chaining is whatever the value of the first promise handler next is the value of the second promise handler
x = download("www.xyz.com");
x.
then(
      function fulfillhandler1(value){
            console.log("content downloaded is",value);
            return "New promise string";
      },
      function rejectionhandler1(value){
            console.log("rejected with",value);
      }
)
.then(
      function newFullfillhandler(value){
            console.log("value from chained then promise",value);
      }
)