// Prompted Questions for users to answer in console
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
        name: "userStory",
        message: "Please provide a short User Story:"
    },

    {
        type: "input",
        name: "build",
        message: "This app was built with:"
    },

    {
        type: "input",
        name: "acceptanceCriteria",
        message: "Please copy and paste, or typer the acceptance criteria if you wish to include it in this README.md file."
    },

    {
        type: "input",
        name: "about",
        message: "Tell us about the project:"
    },

    {
        type: "input",
        name: "installations",
        message: "Are there any instalations required to run the project?"
    },

    {
        type: "input",
        name: "clone",
        message: "What is the link to clone the repository?"
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
        message: "Are there any license's? If not just hit enter.",
        choices: ["MIT License", "GNU GPLv3 License", "Apache License", "Boost", "Mozilla", "GNU LGPLv3", "GNU AGPLv3"]
    },

    {
        type: "input",
        name: "author",
        message: "What is your name?"
    },

    {
        type: "input",
        name: "gitName",
        message: "What is your github user name?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

    {
        type: "input",
        name: "URL",
        message: "What is the URL of the live website?"
    },

    {
        type: "input",
        name: "repoLink",
        message: "What is the URL of the github repo?"
    },

];

module.exports = {
    questions: questions,
};