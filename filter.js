
const data = [10,11,20,9,4,5,10,2,5,4,80,5,0,40,1];

function filter(inputData){
    const result = inputData.filter((a) =>a < 15 && a %2 ==0 )
    console.log(result);

}

filter(data);