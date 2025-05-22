//Tasks: (Dont use promise only use callbacks)
//1. Write a function to download data from a url
//2. write a function to save that downloaded data in a file and return the filename
//3. write a function to upload the file written in previous step to a newurl
function download(url,cd){
      console.log("starting to download data from",url);
      setTimeout(function down(){
            console.log("Downloading completed");
            const content = "ABCDEF";
            cd(content);
      },4000);
}

download("www.xyz.com",function exec(content){
      console.log("The downloading from the url is completed with a content",content);
})

//2. writing a function to save that downloaded data in a file and return the filename
function writeFilename(data,cd){
      console.log("Started downloading after 5s",data);
      setTimeout(function write(){
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            cd(filename);
      },500);

}

writeFilename("abcdef",function process(name){
      console.log("file written with name",name);
})

//upload the filename
function upload(url,file,cd){
      console.log("started uploading",file,"on",url);
      setTimeout(function up(){
            console.log("uploading started");
            const response = "Success";
            cd(response);
      },1000);
}

download("www.xyz.com",function processDownload(content){
      writeFilename(content,function processwrite(file){
            console.log("We have downloaded and written the file, now will upload");
            upload("www.xyz.com",file,function processUpload(response){
                  console.log("We have uploaded with",response);
            });
      });
});