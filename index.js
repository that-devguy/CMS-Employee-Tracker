const inquirer = require('inquirer');
const {queryDepartment, queryRoles, queryEmployees, newDepartment} = require('./db/queries.js')


// mainMenu prompt for asking the user what they'd like to do
const questions = {
        type: 'list',
        message: 'What would you like to do?',
        name: 'mainMenu',
        choices: [
            {name: 'View All Departments', value: 'View All Departments'},
            {name: 'View All Roles', value: 'View All Roles'}, 
            {name: 'View All Employees', value: 'View All Employees'}, 
            {name: 'Add a Department', value: 'Add a Department'},
            {name: 'Add a Role', value: 'Add a Role'},
            {name: 'Add an Employee', value: 'Add an Employee'},
            {name: 'Update an Employee Role', value: 'Update an Employee Role'},
            {name: 'Exit', value: 'Exit' }
        ],
    }


// Function to activate the functions for each activity
function runPrompt() {
    inquirer.prompt(questions).then(
        response => {
            const selectedOption = response.mainMenu;

            switch (selectedOption) {
                case 'View All Departments':
                    viewDepartments()
                    break;
                case 'View All Roles':
                    viewRoles()
                    break;
                case 'View All Employees':
                    viewEmployees()
                    break;
                case 'Add a Department':
                    addDepartment()
                    break;
                case 'Add a Role':
                    addRole()
                    break;
                case 'Add an Employee':
                    addEmployee()
                    break;
                case 'Updated an Employee Role':
                    updateEmployeeRole()
                    break;
                case 'Exit':
                    console.log('Exiting...\n')
                    process.exit();
            }
        }
    )  
}

// .then function to display table & repeat prompt recomended by Slavic Andreev
function viewDepartments() {
    queryDepartment().then (
        function(res) {
            console.log("")
            console.table(res[0])
            runPrompt();
        }
    )
}

function viewRoles() {
    queryRoles().then (
        function(res) {
            console.log("")
            console.table(res[0])
            runPrompt();
        } 
    )
}

function viewEmployees() {
    queryEmployees().then (
        function(res) {
            console.log("")
            console.table(res[0])
            runPrompt();
        } 
    )
}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}

runPrompt();