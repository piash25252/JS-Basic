
// const searchTextlist = ["Nike","Seasonal","Hacked fashion","Nizza trefoil"]

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// const searchText = searchTextlist[getRandomInt(0,3)];
// console.log(searchText);


const searchTextlist = ["Nike","Seasonal","Hacked fashion","Nizza trefoil"]

function getRandomInt(min,max){
    min = Math.ceil(min);
    max =  Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);


}
const searchText = searchTextlist[getRandomInt(0,4)];
console.log(searchText);





const searchTextlist = ["Nike","Seasonal","Hacked fashion","Nizza trefoil"]

function getRandomInt(min,max){
    min = Math.ceil(min);
    max =  Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);


}
const searchText = searchTextlist[getRandomInt(0,4)];

console.log(searchText);
pm.collectionVariables.set("search_text",searchText);
const testData = pm.collectionVariables.get("search_text");
// console.log(`testData: ${testData}`);

