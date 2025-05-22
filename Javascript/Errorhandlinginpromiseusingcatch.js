
function download(url){
      return new Promise(function exec(resolve,reject){
            console.log("starting to download data from",url);
            setTimeout(function down(){
                  console.log("Downloading completed");
                  const content = "ABCDEF";
                  resolve(content);
            },4000);
      })
}

function writeFile(data){
      return new Promise(function exec(resolve, reject) {
            setTimeout(function write(){
                  console.log("Completed writing the data in a file");
                  const filename = "file.txt";
                  resolve(filename);
            },500);
      })
}

function upload(file,url){
      return new Promise(function exec(resolve,reject){
            setTimeout(function uploading(){
                  console.log("uploading started");
                  const response = "Success";
                  resolve(response);
            },1000);
      })
}

download("www.xyz.com")
.then(function processDownload(value){
      console.log("downloading done with following value",value);
      return writeFile(value);
}
)
.then(function processwrite(value){
      console.log("data written with the file name",value);
      return upload(value);
}
)
.then(function upload(value){
      console.log("data is written inside thhe file",value);
}
)
.catch(function f(err){
      console.log("catching error",err);
}) //if catch is used if it promise is rejected then it wont go to the 
//.then function it directly goes to the .catch function
.finally(function final(){
      console.log("executing finally");
}) //.finally will be executed if the promise is resolved or rejected