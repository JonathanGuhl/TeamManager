// Local Imports
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// Node Imports
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");




//Employees Object Storage
let employees = [];

// Makes sure user inputs something during prompts
function inputValidation(value) {
    if (value == "") {
        return "An input is required."
    } else {
        return true;
    }
}
// Initial Question 
function createProfile() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What type of employee are we making a profile for?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"],
            },
        ])
        .then(getCorrectQuestions);
}

function getCorrectQuestions(answers) {
    if (answers.role === "Manager") {
        inquirer
            .prompt(managerQuestions)
            .then((managerInfo) => {
                let newManager = new Manager(
                    managerInfo.name,
                    managerInfo.id,
                    managerInfo.email,
                    managerInfo.officeNumber
                );
                employees.push(newManager);
                console.log("New Manager added:", newManager);
                askToAddNewMember();
            });
    } else if (answers.role === "Engineer") {
        inquirer
            .prompt(engineerQuestions)
            .then((engineerInfo) => {
                let newEngineer = new Engineer(
                    engineerInfo.name,
                    engineerInfo.id,
                    engineerInfo.email,
                    engineerInfo.github
                );
                employees.push(newEngineer);
                console.log("New Engineer added:", newEngineer);
                askToAddNewMember();
            });
    } else if (answers.role === "Intern") {
        inquirer
            .prompt(internQuestions)
            .then((internInfo) => {
                let newIntern = new Intern(
                    internInfo.name,
                    internInfo.id,
                    internInfo.email,
                    internInfo.school
                );
                employees.push(newIntern);
                console.log("New Intern added:", newIntern);
                askToAddNewMember();
            });

    }
}

// Manager Questions
const managerQuestions = [
    {
        type: "input",
        message: "Please give the first and last name of the manager.",
        name: 'name',
        validate: inputValidation,
    },

    {
        type: "input",
        message: "Please type in the manager's ID number.",
        name: 'id',
        validate: inputValidation,
    },

    {
        type: "input",
        message: "What is the manager's work email?",
        name: "email",
        validate: inputValidation,
    },

    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
        validate: inputValidation,
    },

];

// Engineer Questions 
const engineerQuestions = [
    {
        type: "input",
        message: "Please give the first and last name of the engineer.",
        name: 'name',
        validate: inputValidation,
    },

    {
        type: "input",
        message: "Please type in the engineer's ID number.",
        name: 'id',
        validate: inputValidation,
    },

    {
        type: "input",
        message: "What is the engineer's work email?",
        name: "email",
        validate: inputValidation,
    },

    {
        type: "input",
        message: "What is the engineer's github username?",
        name: "github",
        validate: inputValidation,
    },
];

// Intern Questions 
const internQuestions = [
    {
        type: "input",
        message: "Please give the first and last name of the intern.",
        name: "name",
        validate: inputValidation,
    },

    {
        type: "input",
        message: "Please type in the intern's ID number.",
        name: 'id',
        validate: inputValidation,
    },

    {
        type: "input",
        message: "What is the intern's work email?",
        name: "email",
        validate: inputValidation,
    },

    {
        type: "input",
        message: "What school is the intern attending?",
        name: "school",
        validate: inputValidation,
    },
];
// Runs after each set of questions, invokes original prompt (createProfile())
function askToAddNewMember() {
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Do you want to add another team member?",
                name: "addNewMember",
            },
        ])
        .then((answer) => {
            if (answer.addNewMember) {
                createProfile()
            } else {
                createTeam()
            }
        });
}

createProfile();

function createTeam() {
    const html = `
<!DOCTYPE html>    
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Page</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 bg-secondary text-white team-header">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container-lg">
        <div class="row justify-content-center">
            ${employees
                .map((employee) => {
                    if (employee instanceof Manager) {
                    return `
                <div class="card col-lg-3 m-2 shadow-lg bg-primary">
                    <div class="card-body">
                      <h2 class="card-title p-1 text-white">${employee.getName()}</h2>
                        <h5 class="card-subtitle p-2 mb-2 text-white">${employee.getRole()}</h5>
                            <ul class="list-group rounded-sm">
                                <li class="list-group-item font-weight-bold">ID: ${employee.getId()}</li>
                                <li class="list-group-item font-weight-bold">Email: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
                                <li class="list-group-item font-weight-bold">Office Number: ${employee.getOfficeNumber()}</li>
                            </ul>
                    </div>
                </div>
                  `;
                } else if (employee instanceof Engineer) {
                    return `
                <div class="card col-lg-3 m-2 shadow-lg bg-primary">
                    <div class="card-body">
                      <h2 class="card-title p-1 text-white">${employee.getName()}</h2>
                        <h5 class="card-subtitle p-2 mb-2 text-white">${employee.getRole()}</h5>
                            <ul class="list-group rounded-sm">
                                <li class="list-group-item font-weight-bold">ID: ${employee.getId()}</li>
                                <li class="list-group-item font-weight-bold">Email: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
                                <li class="list-group-item font-weight-bold">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
                            </ul>
                    </div>
                </div>
                  `;
                } else if (employee instanceof Intern) {
                    return `
                <div class="card col-lg-3 m-2 shadow-lg bg-primary">
                    <div class="card-body">
                      <h2 class="card-title p-1 text-white">${employee.getName()}</h2>
                        <h5 class="card-subtitle p-2 mb-2 text-white">${employee.getRole()}</h5>
                            <ul class="list-group rounded-sm">
                                <li class="list-group-item font-weight-bold">ID: ${employee.getId()}</li>
                                <li class="list-group-item font-weight-bold">Email: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
                                <li class="list-group-item font-weight-bold">School: ${employee.getSchool()}</li>
                            </ul>
                    </div>
                </div>
                  `;
                }
            })
            .join("")}
        </div>
    </div>
</body>
</html>
    `;
    const outputPath = path.join(__dirname, "generated", "team.html");

    if (!fs.existsSync(path.join(__dirname, "generated"))) {
        fs.mkdirSync(path.join(__dirname, "generated"));
    }

    fs.writeFileSync(outputPath, html);
    console.log("Your HTML file has been generated successfully within the generated folder!");
}

