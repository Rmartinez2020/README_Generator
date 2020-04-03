// Require all npm packages and files
const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api")
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
        choices: ["MIT", "GNU GPLv3"]
    },
    {
        type: "input",
        name: "test",
        message: "How do you test your project?"
    },
];

function init() {
    //prompt the use with questions
    inquirer.prompt(questions).then(function (answers) {
        //use the username input to hit the github api
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(function (data) {
            const avatar = data.data.avatar_url;
            let newFile = generateMarkdown(answers, avatar);
            fs.writeFile('newReadMe.md', newFile, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
        )
    })


}

init();
