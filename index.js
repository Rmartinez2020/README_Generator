// Require all npm packages and files
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");
// questions to user using "enquirer"
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your projects name"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project:"
    },
    {
        type: "input",
        name: "install",
        message: "What are the steps to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license do you want on your project?",
        choices: ["MIT", "GNU"]
    },
    {
        type: "input",
        name: "test",
        message: "How do you test your project?"
    },
    {
        type: "input",
        name: "credits",
        message: "Who made contributions to this project?"
    },
];

function init() {
    //prompt the use with questions
    inquirer.prompt(questions).then(function (answers) {
        //use the username input to hit the github api
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(function (data) {
            //get the avatar url from the object
            const avatar = data.data.avatar_url;
            //make a new file 
            let newFile = generateMarkdown(answers, avatar);
            fs.writeFile('newReadMe.md', newFile, function (err) {
                if (err) throw err;
            });
        }
        )
    })


}

init();
