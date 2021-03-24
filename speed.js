
 //var value = prompt('enter number:');

function speed(value){
   //var value =30;
    if (value<=10) {
        return 'slow';
    }
    if (value>10 && value<=40) {
        return "average";
    }
    if (value>40 && value<=100) {
        return "fast";
    }
    if (value>100 && value<=180) {
        return "veryfast";
    }
    if (value>180) {
        return "extremely fast";
    }
}

console.log(s);
var s = speed(60);
console.log(s);


