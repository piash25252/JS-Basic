
function condition(data)
{
    // const data = 20;
    if(data == 0)
    {
        console.log(data+ " is a even number");
    }
    else if (data % 2 == 1 && data > 0)
    {
         console.log(data+ " is a odd number");
    }
    else if (data % 2 == 0 && data > 0)
    {
        console.log(data+ " is a even number");

    }
    else
    {
        console.log("Please enter a valid number");
    }
        
}
condition(2,0)