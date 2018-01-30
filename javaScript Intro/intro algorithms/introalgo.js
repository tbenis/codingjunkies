// function primeNumber() {
//     var primeNum = prompt("Please a number:",);
//     if (primeNum == null || primeNum == "") {
//         primeNum = "That was not a number or is <= 1.";
//     } else if (primeNum <= 1){
//         console.log(primeNum + " That was not a number or number is <= 1.");
//
//     }else if (primeNum <= 3){
//         console.log(primeNum + " Is a Prime Number");
//
//     } else if (primeNum%2 == 0 || primeNum % 3 == 0) {
//         console.log(primeNum + " is not a Prime Number");
//     } else {
//       var random = 5
//       while (random * random <= primeNum) {
//           if (primeNum % random == 0 || primeNum % (i + 2) == 0) {
//               console.log(primeNum + " is not a Prime Number");
//               random = random + 6;
//           }
//           console.log(primeNum + " is a Prime Number");
//       }
//     }
//     }
// primeNumber()


// function duplicatesInArray() {
//   var givenarray = [1,2,2,2,1,5,6,7,8,1] ;
//   for (var i = 0; i < givenarray.length; i++) {
//     var ontest = givenarray[i];
//       for (var j = givenarray.indexOf(ontest) + 1; j < givenarray.length; j++) {
//         if (ontest == givenarray[j + 1]) {
//             givenarray.splice(givenarray[j + 2],1);
//         }
//       }
//       console.log(givenarray);
//   }
//
// }
//
// duplicatesInArray()

// function swapword() {
//   var givenarray = ["dog","mouse","cat","rabbit"] ;
//   givenarray = [givenarray[1],givenarray[0],givenarray[2], givenarray[3]];
//   console.log(givenarray);
// }
// swapword()

// function primeNumber() {
// var primeNum = prompt("Please a number:",);
//     if (primeNum == null || primeNum == "") {
//         primeNum = "That was not a number or is <= 1.";
//     } else if (primeNum <= 1){
//         console.log(primeNum + " That was not a number or number is <= 1.");
//
//     }else if (primeNum >= 2){
//       for (var i = 2; i < primeNum ; i++) {
//         while (primeNum%i == 0 || primeNum%primeNum == 0) {
//           console.log(primeNum + " is a prime Number");
//         }
//           console.log(primeNum + " is not a prime Number");
//       }
//     }
// }
// primeNumber()
// function doublenum() {
//   var array = [1,2,2,2,1,5,6,7,8,1]
//   var newArr = [];
//   for (var i = 0; i < array.length; i++) {
//         while (array[i] != newArr) {
//           newArr.push(array[i]);
//           console.log(newArr);
//     }
// }
// }
//
// doublenum()

// function allIntegers() {
//   var integers = [];
//   for (var i = 1; i <255; i++) {
//     integer.push(i)
//   }console.log(i);
//
// }
// allIntegers()

// function Oddnum(){
//   var number = [];
//   for (var i = 1; i <=255; i++) {
//     if (i%2 != 0) {
//       number.push(i)
//     }
//     console.log(number);
// }
// }
// Oddnum()

// function numInteger(){
//   var sumall = 0;
//   var sum =0;
//   var integer = [];
//     for (var i = 0; i <=255; i++) {
//         sumall = sumall + i;
//         integer.push(i);
//     }
//     console.log(sumall);
//     console.log(integer);
// }
//
// numInteger()
