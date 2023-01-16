"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name) {
        this.name = name;
        Employee.addEmployee();
    }
    static addEmployee() {
        this.employeeCount += 1;
    }
    static get employees() {
        return this.employeeCount;
    }
}
exports.default = Employee;
Employee.employeeCount = 0;
