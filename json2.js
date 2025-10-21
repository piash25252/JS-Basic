const students = [
    {
         name2 : "stuent A",
         grade : "A-",
    },
    {
         name2 : "stuent H",
         grade : "A+",
    },
    {
         name2 : "stuent C",
         grade : "B",
    },
      {
         name2 : "stuent D",
         grade : "A",
    },
      {
         name2 : "stuent B",
         grade : "F",
    },
];

function grouping(student){
    // for(let i=0; i<students.length; i++){
    //     console.log(students[i].grade);

    const groupData = Object.groupBy(student,(item) => item.grade)
    console.log(groupData);
    }


grouping(students);





// const myArray = [1,2,3];

// function show(arr) {
//     console.log(arr);
// }

// show(myArray);
