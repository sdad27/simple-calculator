#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNumber" },
  { message: "Enter second Number", type: "number", name: "secondNumber" },
  {
    message: "type operators",
    type: "list",
    name: "operators",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if (answer.operators === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operators === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operators === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operators === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("wrong operator");
}
