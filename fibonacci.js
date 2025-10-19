
// function fibonacci(len)
// {
//     let series  =[0,2];
//     for (let i =2;i<len;i++)
//     {
//         currentData = series[i-1]+series[i-2];
//         series.push(currentData);
//     }
//     console.log(`expected fibonacci series is: ${series}`);
// }
// fibonacci(8);
    
function fibonacci(len){
    let series=[0,1];
    for (let i =2;i<len;i++){
        currentData = series[i-1]+series[i-2];
        series.push(currentData);
    }
    console.log(`expected fibonacci seris is: ${series}`);

}
fibonacci(20);