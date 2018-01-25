
arrayOne = [1, 2, 3, 4, 5];
arrayTwo = [1, "dog", 3, "cat", 5];
arrayThree = [[20,[12,5],4,5], 2, "Foi", 4, [7,8]];

// arrayOne[0] = 1
// arrayTwo[1] = dog
// arrayThree[0] = [20,[12,5]4,5];
// console.log(arrayOne[0]);
// console.log(arrayTwo[1][1]) // = dog;
// console.log(arrayThree[0][1][0]) // = 12;

//Checking if an element is iterable
//solition 1
function checkIterable(iterable){
    // console.log("This is what we are working with: "+ iterable);
    var fine = "fined"
    // console.log("I am "+ fine);
    for(var i = 0; i <= iterable.length; i++){
        // console.log(iterable[i]);
    }
}
checkIterable([1,2,3,4]);

// solution2
// console.log("The length is: "+[1,2,3,4].length);
