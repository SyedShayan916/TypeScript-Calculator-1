import inquirer from "inquirer";



const ans : {
    numberOne:number,
    numberTwo:number,
    operator:string
} = await inquirer.prompt([
    {
        type:"number",
        name:"numberOne",
        message:"Kindly Enter Your first no: "
    },
    {
        type:"number",
        name:"numberTwo",
        message:"Kindly Enter Your second no: "
    },
    {
        type:"list",
        name:"operator",
        choices:["/","*","+","-",],
        message:"Select Operator: "
    }
])

const {numberOne,numberTwo,operator} = ans;

if(numberOne && numberOne && operator)
{
    let result: number = 0 ;
    if(operator === "+") 
    {
        result = numberOne + numberTwo
    }
    else if(operator === "*") 
    {
        result = numberOne * numberTwo
    }
    if(operator === "/") 
    {
        result = numberOne / numberTwo
    }
    if (operator === "-") 
    {
        result = numberOne - numberTwo
    }
    console.log ("Your Result is :" , result)
}
else
{
    console.log("Kindly Enter Valid Input")
}