const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Get employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Add a new employee
router.post('/', employeeController.addEmployee);

// Update employee by ID
router.put('/:id', employeeController.updateEmployeeById);

// Delete employee by ID
router.delete('/:id', employeeController.deleteEmployeeById);

module.exports = router;
