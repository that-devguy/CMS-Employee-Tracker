// imports console.table
const cTable = require('console.table');
const connection = require('./connection.js')

const queryDepartment = function () {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log("")
        console.table(res)
        console.log("")
    })
}

const queryRoles = function () {
    const query = 'SELECT * FROM roles';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log("")
        console.table(res)
        console.log("")
    })
}

const queryEmployees = function () {
    const query = 'SELECT * FROM employees';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log("")
        console.table(res)
        console.log("")
    })
}

const newDepartment = function (departmentName) {
    const query = 'INSERT INTO department (name) VALUES (?)'
    connection.query(query, [departmentName], (err, res) => {
        if (err) throw err
        console.log(`Successfully added department ${departmentName}`)
    })
}


module.exports = { queryDepartment, queryRoles, queryEmployees, newDepartment }