// imports console.table
const cTable = require('console.table');
const connection = require('./connection.js')

const queryDepartment = function () {
    const query = 'SELECT * FROM department';
    return connection.promise().query(query)
}

const queryRoles = function () {
    const query = 'SELECT * FROM roles';
    return connection.promise().query(query)
}

const queryEmployees = function () {
    const query = 'SELECT * FROM employees';
    return connection.promise().query(query)
}

const newDepartment = function (departmentName) {
    
}


module.exports = { queryDepartment, queryRoles, queryEmployees, newDepartment }