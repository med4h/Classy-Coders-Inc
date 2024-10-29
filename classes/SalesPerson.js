const { Employee } = require("./Employee");


class SalesPerson extends Employee {
    #totalSales
constructor(name, position, salary, isHired, clients = [], totalSales = 0){
    super(name, position, salary, isHired);
    this.clients = clients;
    this.#totalSales = totalSales;
}
getSalesNumbers(){
    return this.#totalSales
}
makeSale(amount){
    this.#totalSales + amount
}
}

module.exports = {
    SalesPerson,
}