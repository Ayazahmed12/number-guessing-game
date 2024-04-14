#! /user/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelllcom to Codewithayaz - CLI Number Guessin Game\n");

const randomNumber = Math.floor(Math.random()* 5+1);
const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Enter Your guess number (Number Limit from 1 to 5)",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("congratulation ! Your guess is correct");
}
else{
    console.log("sorry, your guess number i not corect");
    
}
