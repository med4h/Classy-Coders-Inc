const { Employee } = require("./Employee");

class Manager extends Employee {
    #employeesManaged
constructor(name, position, salary, isHired, department, employeesManaged = []){
    super(name, position, salary, isHired);
    this.department = department;
    this.#employeesManaged = employeesManaged;
}
getEmployeesManaged(){
    return this.#employeesManaged
}
addGetEmployeesManaged(employee){
return this.addGetEmployeesManaged.push(employee)
}
}

module.exports = {
    Manager,
}