//Tasks: (Dont use promises only use promises)
//1. Write a function to download from a url
//2. Write a function to save the downloaded data in a file and return the filename
//3. Write a function to upload the file written in previous step to a newurl
function download(url){
      return new Promise(function exec(resolve,reject){
            console.log("starting to download data from",url);
            setTimeout(function down(){
                  const content = "ABCDEF";
                  resolve(content);
            },4000);
      })
}

function writeFile(data){
      return new Promise(function exec(resolve, reject) {
            setTimeout(function write(){
                  const filename = "file.txt";
                  resolve(filename);
            },500);
      })
}

function upload(file,url){
      return new Promise(function exec(resolve,reject){
            setTimeout(function uploading(){
                  const response = "Success";
                  resolve(response);
            },1000);
      })
}


function doAfterReceiving(value){
const future = iter.next(value);
console.log("future is",future);
if(!future.done){
      future.value.then(doAfterReceiving);
}
}

function* steps(){
      const downloadedData = yield download("www.xyz.com");
      console.log("data downloaded is",downloadedData);

      const filewritten = yield writeFile(downloadedData);
      console.log("file written is",filewritten);

      const uploadResponse = yield upload(filewritten,"www.drive.google.com");
      console.log("upload response is",uploadResponse);

      return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);






