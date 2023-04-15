const inquirer = require('inquirer');
const fs = require('fs'); 

// First prompt for asking the user what they'd like to do
const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'activityChoices',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit'],
        default: 'View All Departments',
    }
]

// Function to activate the functions for each activity
async function mainQuestion(questions) {
    const answer = await inquirer.prompt(questions);
    const selectedOption = answer.activityChoices;

    if (selectedOption === 'View All Departments') {
        viewDepartments()
        console.log('Viewing all departments...')
    } else if (selectedOption === 'View All Roles') {
        viewRoles()
        console.log('Viewing all roles...')
    } else if (selectedOption === 'View All Employees') {
        viewEmployees()
        console.log('Viewing all employees...') 
    } else if (selectedOption === 'Add a Department') {
        addDepartment()
        console.log('Adding a department...')
    } else if (selectedOption === 'Add a Role') {
        addRole()
        console.log('Adding a role...')
    } else if (selectedOption === 'Add an Employee') {
        addEmployee()
        console.log('Adding an employee...')
    } else if (selectedOption === 'Update an Employee Role') {
        updateEmployeeRole()
        console.log('Updating an employee role...')
    } else if (selectedOption === 'Exit') {
        console.log('Exiting...')
    }
}


function viewDepartments() {

}

function viewRoles() {

}

function viewEmployees() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}


mainQuestion(questions);