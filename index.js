// Define the updateEmployeeWithKeyAndValue function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Test the updateEmployeeWithKeyAndValue function
  const employee = {
    name: "John Doe",
    role: "Developer",
    age: 30,
  };
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "salary", 50000);
  
  console.log("Original employee:", employee);
  console.log("Updated employee:", updatedEmployee);
  
  // Define the destructivelyUpdateEmployeeWithKeyAndValue function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Update the employee object destructively
    return employee;
  }
  
  // Define the deleteFromEmployeeByKey function
function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee }; // Create a clone of the employee object
    delete clonedEmployee[key]; // Delete the specified key from the clone
    return clonedEmployee; // Return the new employee object without modifying the original
  }
  
  // Define the destructivelyDeleteFromEmployeeByKey function
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Delete the specified key from the employee object destructively
    return employee; // Return the modified employee object
  }
  