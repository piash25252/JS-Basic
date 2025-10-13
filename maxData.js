
const data = [20,22,10,5,1,1000,1,2,800,10000,45,1,8,16,21564];

function get_max(array_Data)
{
    let maxData = array_Data[0];
    for(let i =1; i<array_Data.length;i++)
    {
        if(array_Data[i]>maxData)
        {
            maxData=array_Data[i];
        }
    }
    console.log(`max Data is : ${maxData}`);
}
get_max(data)