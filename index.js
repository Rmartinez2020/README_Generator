// Require all npm packages and files
const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api")
// questions to user using "enquirer"
const questions = [
    {
        type:"input",
        name:"username",
        message:"What is your Github username?"
    },
    {
        type:"input",
        name:"title",
        message:"What is your projects name"
    },
    {
        type:"input",
        name:"description",
        message:"Describe your project:"
    },
    {
        type:"input",
        name:"install",
        message:"What are the steps to install your project?"
    },
    {
        type:"input",
        name:"usage",
        message:"How do you use your project?"
    },
    {
        type:"list",
        name:"license",
        message:"What license do you want on your project?",
        choices:["MIT", "GNU GPLv3"]
    },
    {
        type:"input",
        name:"test",
        message:"How do you test your project?",
        choices:["MIT", "GNU GPLv3"]
    },
    {
        type:"input",
        name:"questions",
        message:"Who should user contact with questions?",
        choices:["MIT", "GNU GPLv3"]
    },


];

function init() {
    inquirer.prompt(questions).then(function (answers){
        api.getUser(answers.username);
    })


}

init();
