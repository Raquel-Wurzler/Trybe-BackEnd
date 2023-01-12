"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const sum = this.myNumber + myParam;
        return `Total ${sum}`;
    }
}
exports.MyClass = MyClass;
