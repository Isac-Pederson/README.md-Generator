// array of questions for user
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [{
            type: "input",
            message: "Title:",
            name: "title",
        },
        {
            type: "input",
            message: "Description:",
            name: "description",
        },
        {
            type: "input",
            message: "Installation Instructions:",
            name: "installation",
        },
        {
            type: "input",
            message: "Usage:",
            name: "usage",
        },
        {
            type: "list",
            message: "Choose a license for your project",
            choices: ["Mozilla Public License 2.0", "GNU General Public License v2.0", "ISC", "Creative Commons license family", "Apache license 2.0", "The Unlicense"],
            name: "license",
        },
        {
            type: "input",
            message: "Contributions:",
            name: "contributions",
        },
        {
            type: "input",
            message: "Tests:",
            name: "tests",
        },
        {
            type: "input",
            message: "Email:",
            name: "email",
        },
        {
            type: "input",
            message: "Github Username:",
            name: "gitusername",
        },
        {
            type: "input",
            message: "Name of Repo (no spaces)",
            name: "repo",
        },
        {
            type: "input",
            message: "Type first and last name(no spaces)",
            name: "name",
        }
    ]

function writeToFile(fileName,data) {
        var fs = require("fs");
        fs.writeFile(fileName,data, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Success! README.MD generated.");
        });
}

// function to initialize program
async function init() {
    let data = await inquirer.prompt(questions);

    const markdown = generateMarkdown(data);
    // Write markdown to file
    (writeToFile('ExampleREADME.md', markdown));

}

// function call to initialize program
init();
