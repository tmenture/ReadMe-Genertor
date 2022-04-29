//
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//
const generateMarkdown = requier('./utils/generateMarkdown');
const renderLicense = require('./utils/renderLicense').renderLicense;
const questions = require('./utils/questions').questions;
//
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
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