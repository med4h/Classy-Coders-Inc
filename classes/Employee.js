class Employee {
    static #allEmployees = [];
    #salary
    #isHired
    constructor(name, position, salary, isHired = true){
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = isHired;
}
getSalary(){
    return this.#salary;
}
getSalaryAmount(amount){
   this.#salary + amount;
}
getStatus(){
    return this.#isHired;
}
setStatus(command){
if(command !== 'hire')
    return false
}
static getEmployees() {
    return Employee.#allEmployees;
}

static getTotalPayroll() {
    return Employee.#allEmployees.reduce((total, employee) => total + employee.getSalary(), 0);

}
}
module.exports = {
    Employee,
}
