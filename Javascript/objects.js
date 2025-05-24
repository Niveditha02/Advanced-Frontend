let samsung = {
      name:"Samsung",
      price:10000,
      description:"The samsung phone is samsung galaxy M12",
      ratings:4.3,
      display(){
            console.log(this);
      }
}

let motorolla = {
      name: "motorolla",
      price: 120000,
      decription:"The motorolla phone is motoralla g12",
      ratings:4.4,
      display(){
            console.log(this);
      }
}

samsung.display();
motorolla.display();

//case 1: this using function
const iphone = {
      name: "iphone",
      price: 10000,
      rating:4.4,
      display:function(){
            let iphonered = {
                  name:"iphone red",
                  price:11000,
                  print:()=>{
                        console.log(this);//here this refers to the calling object i,e iphone so it prints object
                  }
            }
            iphonered.print();
      }
}
iphone.display();

//case 2: this using arrow function
const iphone1 = {
      name:"iphone12",
      price:1000000,
      ratings:4.5,
      display:()=>{
            let iphoneblue = {
                  name:"iphone blue",
                  price:40000,
                  ratings:4.3,
                  print:()=>{
                        console.log(this);//this here checks is there any calling object present no then it checks the display is there any calling object no then it checks global scope is there any calling object yes then prints the empty object
                  }
            }
            iphoneblue.print();
      }
}
iphone1.display();