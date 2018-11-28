function greet(){
    console.log("Hi Ravi");

}
greet();

function testFun(Fn){
    Fn();
}
testFun(greet);

var greetMe = function (){   
    console.log("Hi This is Ravi");
}
testFun(greetMe);

