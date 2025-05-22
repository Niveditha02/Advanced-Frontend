//if you have to do parallel downloading this helps 
function download(url,time){
      return new Promise(function exec(resolve,reject){
            console.log("starting to download data from",url);
            setTimeout(function down(){
                  console.log("Downloading completed");
                  const content = "ABCDEF";
                  if(time > 1000){
                        reject("err")//you are rejecting after 2nd promise
                  }else
                  resolve(content);
            },time);
      })
}

const p1 = download("www.abc.com",5000);
const p2 = download("www.xyz.com",1000);
const p3 = download("www.pkg.com",800);
Promise.all([p1,p2,p3]).then(function fullfillhandler(values){
      console.log(values);
}
)

//usecase of promise.all
//1.In google pay we actually communicate the server this kind of Rpa and local calls already exist. 
//In this same api call we want to fetch some more data then we wrap it inside promise.dot all and then fetch it
