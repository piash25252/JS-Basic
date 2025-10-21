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

function grouping(students){
    for(let i=0; i<students.length; i++){
        console.log(students[i].grade);
    }

}
grouping(students);