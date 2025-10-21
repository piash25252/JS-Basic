
// function add (number){
//     let result;
//     if (number % 2 !==0){
//         result = 'odd';
//     }
//     else{
//         result = 'even';
//     }

//     return result;

// }

// ei vbe kora jai venge venge
// let output = add(1);

// console.log(output);

// console.log(add(5));




function add(number){
    let result = number == 0? 'even': number % 2 == 0? 'even':'odd';
    return result;
}
console.log(add(0));




















// let result; // এখন এটি global variable

// function add(number) {
//     if (number % 2 !== 0) {
//         result = 'odd';  // function ভিতর থেকেও accessable
//     } else {
//         result = 'even';
//     }
//     return result;
// }

// add(1);
// console.log(result); // Output: odd
