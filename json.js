
const vehiclea = [
    {
        name: "BMW",
        type: "car",
        wheel: 4,
    },
    {
        name: "toyota",
        type: "car",
        wheel: 4,
    },
    {
        name: "Mercedes",
        type: "car",
        wheel: 4,
    },
    {
        name: "yemaha",
        type: "bike",
        wheel: 2,
    },
];

function readAllvehiclea(){
    for(let i =0;i<vehiclea.length;i++){
        console.log(vehiclea[i].name," ",vehiclea[i].type);
    }
}
readAllvehiclea();


