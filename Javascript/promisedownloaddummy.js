function download(url){
      console.log("started downloading content from",url);
      return new Promise(function exec(res,rej){
            setTimeout(function p(){
                  console.log("Completed downloading data in 5s");
                  const content = "ABCDEF";
                  res(content);
            },5000);
      })
}

download("www.xyz.com")
.then(function fulfillhandler(value){
      console.log("content downloaded is",value);//here using promises we are not giving access to te third paty function like as in example callbackdownload.js
})