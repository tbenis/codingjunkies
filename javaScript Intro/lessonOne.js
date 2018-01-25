// count up to 10
function countToTen(x){
    for(x; x<=10; x++){
        // console.log(x);
    }
}
countToTen(0);

// using operators in javascript
function operators(x, y, z){
    // console.log(z-y/x)
}
operators(2,15,25);

//complex operations with multiple functions
function reduce(iterable, func) {
        // code here;
        init = iterable[0];
        for(var i = 1; i < iterable.length; i++){
            init = func(init, iterable[i]);
        }
        return init;
    }

var myArray = [1,2,3,4,5,6,7,8,9,10];
var myReduceFunction = function(arg1, arg2){
    return arg1 + arg2;
}
// console.log("reduce function:")
result = reduce(myArray, myReduceFunction);
// console.log(result);
