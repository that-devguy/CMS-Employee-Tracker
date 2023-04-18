// Imports console.table
const cTable = require("console.table");
const connection = require("./connection.js");

const queryDepartment = function () {
  const query = "SELECT * FROM department";
  return connection.promise().query(query);
};

const queryRoles = function () {
  const query = "SELECT * FROM roles";
  return connection.promise().query(query);
};

const queryEmployees = function () {
  const query = "SELECT * FROM employees";
  return connection.promise().query(query);
};

const newDepartment = function (departmentName) {
  const query = "INSERT INTO department (title) VALUES (?)";
  return connection.promise().query(query, [departmentName]);
};

const newRole = function (roleName, salary, departmentId) {
  const query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
  return connection.promise().query(query, [roleName, salary, departmentId]);
};

const newEmployee = function (firstName, lastName, roleId, managerId) {
    const query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    return connection.promise().query(query, [firstName, lastName, roleId, managerId]);
};

module.exports = { queryDepartment, queryRoles, queryEmployees, newDepartment, newRole, newEmployee };
