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
//##########################################################
function test1(){
var A = 3;
var B = 6;
res = A+B;
console.log(res);
}
test1();
test1();

function testFirst(demo){
    demo();
    //return demo();
}
testFirst(test1);