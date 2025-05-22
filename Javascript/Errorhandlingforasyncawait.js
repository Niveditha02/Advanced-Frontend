function download(url){
      return new Promise(function exec(resolve,reject){
            console.log("starting to download data from",url);
            setTimeout(function down(){
                  const content = "ABCDEF";
                  reject(content);
            },4000);
      })
}

async function steps(){
      try {
            console.log("starting steps");
            const downloadedData = await download("www.xyz.com");
            return uploadResponse;
      }catch(error){
            console.log("we have handled the error",error);
      }finally{
            console.log("ending");
      }
    
}

steps();







