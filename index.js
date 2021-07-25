// TODO: Include packages needed for this application
    const inquirer = require("inquirer");
    const fs = require("fs");
    const util = require('util');
    const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'welcome',
            message: 'Welcome to my automated README.md Generator. \n I\'m going to ask you some questions that will help me complete your customized README.md. \n Let\'s get started! Press ENTER to continue.',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project, exactly as it appears on GitHub?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input your project description.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Input your project installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input your project usage information. How will this be used? ',
        },
        {
            type: 'input',
            name: 'guideline',
            message: 'Input your project contribution guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Input your project test instructions. How can another user test the gerator markdown?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license applies to your project?',
            choices: ['Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'CDDL-1.0', 'EPL-2.0', 'GPL-2.0', 'LGPL-3.0', 'MIT', 'MPL-2.0', 'N/A'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {

    //prompts
    inquirer.prompt(questions)
    //store responses
    .then((answers) => {
        //then create README
        writeToFile('readme.md', generateMarkdown(answers))
        console.log("README is generated")
    })
}
// Function call to initialize app
init();