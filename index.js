const inquirer = require('inquirer');

const htmlPrompt = inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is your date of birth?',
            name: 'dob',
        },
        {
            type: 'input',
            message: 'What is your current professional position?',
            name: 'job'
        },
        {
            type: 'input',
            message: 'Please provide the url of your LinkedIn account.',
            name: 'linkedIn'
        },
        {
            type: 'input',
            message: 'Please provide the url of your GitHub account.',
            name: 'gitHub'
        }
]);