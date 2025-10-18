

// function greet() 
// {
//     console.log("Hello World!");
// }

// // // store a function in the displayPI variable
// // // this is a function expression
// // let displayPI = function() {
// //     console.log("PI = 3.14");
// // }

// // // call the greet() function
// // greet();

// // // call the reply() function
// // displayPI();

// // // Output:
// // // Hello World!
// // // PI = 3.14

// greet();


// let piash = function()
// {
//     console.log("piash=3424523");
// }
// piash();


// function greet(name)
// {
//     console.log(`Hello ${name}`);
// }
// greet("Piash")
// greet("Oni")


// function addNumbers (num1,num2)
// {
//     let sum = num1+ num2;
//     console.log(`sum ${sum}`);
// }
// addNumbers(10,20)

function person (first,last,age)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function()
    {
        return this.firstName + ' '+this.lastName
    }
}
let piash = new person('piash','iaslam',233);
let oni= new person('oni','gkjds',233);
let ashik = new person('ashik','iaslam',233);

console.log(piash);