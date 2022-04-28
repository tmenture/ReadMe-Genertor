const inquirer = require('inquirer');
const fs = require('fs');
const util = reduire('util');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project titled?"
    },

    {
        type: "input",
        name: "description",
        message: "Give a breif description of your project."
    },

    {
        type: "input",
        name: "instalations",
        message: "Are there any instalations required to run the project?"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the use of this application?"
    },

    {
        type: "input",
        name: "contributions",
        message: "Are there any contributions to the project?"
    },

    {
        type: "input",
        name: "testing",
        message: "Please provide testing instructions if necessary."
    },

    {
        type: "checkbox",
        name: "license",
        message: "Are there any license's?",
        choices: ["MIT License", "GNU GPLv3 License"]
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();