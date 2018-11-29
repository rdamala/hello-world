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
var A = 8;
var B = 9;
res = A+B;
console.log(res);
}
//test1();
//test1();

function testFirst(demo){
    demo();
    //return demo();
}
testFirst(test1);

testFirst(function demoTest() {
    console.log("This is function demo test");
    
});