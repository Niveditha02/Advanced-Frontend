//Tasks: (Dont use promises only use promises)
//1. Write a function to download from a url
//2. Write a function to save the downloaded data in a file and return the filename
//3. Write a function to upload the file written in previous step to a newurl
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
})
.then(function processwrite(value){
      console.log("data written with the file name",value);
      return upload(value);
})
.then(function upload(value){
      console.log("data is written inside thhe file",value);

})