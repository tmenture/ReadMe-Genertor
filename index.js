// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// Variables that connect modules to the application
const generateMarkdown = require('./develop/utils/generateMarkdown');
const renderLicense = require('./develop/utils/renderLicense').renderLicense;
const questions = require('./develop/utils/questions').questions;
// Allows use of await
const writeFileAsync = util.promisify(fs.writeFile);

// Function that initializes app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        answers.renderLicense = renderLicense(answers.license);
        let readMe = generateMarkdown(answers);
        await writeFileAsync("created-README.md", readMe);
    } catch (err) {
        throw err;
    }
}

// Function call to initialize app
init();