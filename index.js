const inquirer = require('inquirer');
const fs = require('fs');

const htmlPrompt = () => {
    return inquirer.prompt([
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
}

function generateHTML ( {username, location, dob, job, linkedIn, gitHub}) {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>${username}'s page</title>
    </head>
    <body>
        <main class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1>Hello!</h1>
                <h3>Welcome to ${username}'s page.</h3>
                <ul class="list-group">
                    <li class="list-group-item">Location: ${location}</li>
                    <li class="list-group-item">Date of birth: ${dob}</li>
                    <li class="list-group-item">Current professional position: ${job}</li>
                    <li class="list-group-item">LinkedIn account: <a href="${linkedIn}" target="_blank" rel="noreferrer noopener">${linkedIn}</a></li>
                    <li class="list-group-item">Github account: <a href="${gitHub}" target="_blank" rel="noreferrer noopener">${gitHub}</a></li>
                  </ul>
            </div>
        </main>
    </body>
</html>`;

}

function init () {
    htmlPrompt()
        .then(data => fs.writeFile(`${data.username}.html`, generateHTML(data), (err) => {
            if(err){
              throw err;
            }
            console.log(`wrote ${data.username}.html`);
        }))
}

init()