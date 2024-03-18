const Employee = require('../models/Employee');

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error in getAllEmployees:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    console.error("Error in getEmployeeById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add a new employee
const addEmployee = async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, education } = req.body;
    const newEmployee = new Employee({ name, email, mobile, designation, gender, education });
    await newEmployee.save();
    res.status(201).json({ message: "Employee added successfully", employee: newEmployee });
  } catch (error) {
    console.error("Error in addEmployee:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update employee by ID
const updateEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobile, designation, gender, education } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, email, mobile, designation, gender, education }, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee });
  } catch (error) {
    console.error("Error in updateEmployeeById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete employee by ID
const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error in deleteEmployeeById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllEmployees, getEmployeeById, addEmployee, updateEmployeeById, deleteEmployeeById };
