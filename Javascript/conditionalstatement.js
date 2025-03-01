console.log("Welcome to amazon prime");
var amazonprime=false;
if (amazonprime){
      console.log("Enjoy the subscription");
}
else{
      console.log("Please buy the subscription @2000 only");
}

//elseif
let premiumsubscription=false;
let vipsubscription= true;
console.log("Welcome to disneyplus hotstar");
if(premiumsubscription){
      console.log("Enjoy your disneyplushotstar subscription");
}
else if(vipsubscription){
      console.log("Enjoy your vip subscription");
}else
{
      console.log("Please buy any of subscription to enjoy movies");
}

//nested if else
let primesubscrip=true;
let discoverysubscrip=true;
if(primesubscrip){
      if(discoverysubscrip){
            console.log("enjoy both subscrip");
      }else{
            console.log("enjoy prime subscrip");
      }
}else{
      console.log("Please buy either prime or discovery subscription to enjoy the subscription");
}
