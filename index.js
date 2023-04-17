const inquirer = require('inquirer');
const {queryDepartment, queryRoles, queryEmployees, newDepartment} = require('./db/queries.js')


// First prompt for asking the user what they'd like to do
const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'mainMenu',
        choices: [
            {name: 'View All Departments', value: 'View All Departments'},
            {name: 'View All Roles', value: 'View All Roles'}, 
            // 'View All Employees', 
            // 'Add a Department', 
            // 'Add a Role', 
            // 'Add an Employee', 
            // 'Update an Employee Role', 
            // 'Exit'
        ],
    }
]
runPrompt();

// Function to activate the functions for each activity
function runPrompt() {
    inquirer.prompt(questions).then(
        response => {
            const selectedOption = response.mainMenu;
            console.log(selectedOption);

            switch (selectedOption) {
                case 'View All Departments':
                    viewDepartments()
                    break;
                case 'View All Roles':
                    viewRoles()
                    break;
            }
            // if (selectedOption === 'View All Departments') {
            //     viewDepartments()
            //     return
            // } else if (selectedOption === 'View All Roles') {
            //     viewRoles()
            // } else if (selectedOption === 'View All Employees') {
            //     viewEmployees()
            // } else if (selectedOption === 'Add a Department') {
            //     addDepartment()
            // } else if (selectedOption === 'Add a Role') {
            //     addRole()
            // } else if (selectedOption === 'Add an Employee') {
            //     addEmployee()
            // } else if (selectedOption === 'Update an Employee Role') {
            //     updateEmployeeRole()
            // } else if (selectedOption === 'Exit') {
            //     console.log('Exiting...')
            //     process.exit();
            // }
        }
    )  
}

async function viewDepartments() {
    await queryDepartment()
    runPrompt()
}

function viewRoles() {
    queryRoles()
}

function viewEmployees() {
    queryEmployees()
}

function addDepartment() {
    inquirer.prompt(
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'newDepartment',
            validate: (value) => { if (value) { return true; } else { return "Please enter the name of the department."; } }
        }
    ).then((answer) => {
        newDepartment(answer.newDepartment);
        runPrompt();
    });
}

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}