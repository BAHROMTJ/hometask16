// function circuitPower(a,b) {
//     return a*b;
    
// }
// console.log(circuitPower(230, 10));
// console.log(circuitPower(110, 3));
// console.log(circuitPower(480, 20));






// function divisibleByFive(a) {
//     if (a%5==0) {
//         return true;
//     }
//     return false;
// }
// console.log(divisibleByFive(5));
// console.log(divisibleByFive(-55));
// console.log(divisibleByFive(37));






// function isSameNum(a,b) {
//     if(a===b)
//     {
//    return true;
//     }
//     return false;
// }
// console.log(isSameNum(4,8));
// console.log(isSameNum(2,2));
// console.log(isSameNum(10,10));







// function longestTime(a,b,c) {
//     if (a>b/60&&a>c/3600) {
//         return a;
//     }
//     else if (b>a*60&&b>c/60)
//     {
//        return b;   
//     }
//   return c;
// }
// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(2, 300, 15000));
// console.log(longestTime(15, 955, 59400));








// function oneOddOneEven(a) {
//     if (a%10%2!==Math.floor(a/10%10%2)) {
//         return true;
        
//     }
//     return false;
// }
// console.log(oneOddOneEven(12));
// console.log(oneOddOneEven(55));
// console.log(oneOddOneEven(22));








// function negativeNum(a) {
//     return -a;
// }
// console.log(negativeNum(8));
// console.log(negativeNum(20));
// console.log(negativeNum(6));






// function yers(a) {
//  return `Day= ${ a*365}
// Minut= ${a*525600}
// hour= ${a*8760}
// second= ${a*525600*60} `
// }


// console.log(yers(18));

let cnt=0;
function n(a) {
    cnt++;
   
  return cnt; 
   
}
 console.log(n(0));