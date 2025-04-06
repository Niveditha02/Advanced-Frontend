function fun(x,fun){
      for(let i=0;i<x;i++){
            console.log(i);
      }
      fun();
}
fun(5,function exec()//while calling function of HOF function passed as an argument is functioncall i,e exec
{
      console.log("I am executed also");
})