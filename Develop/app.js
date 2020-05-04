const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your first and last name?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role in the company?',
        choices: ['Intern', 'Engineer', 'Manager']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do you currenty attend',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your current office number?',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the your github account name?',
        when: (answers) => answers.role === 'Engineer'
    }
]

)

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!
    .then((data) => {
        const { name, role, id, school, officeNumber, github } = data
        render(data)




    })


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```