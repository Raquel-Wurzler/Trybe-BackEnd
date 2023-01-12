"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunc = exports.Subclass = exports.Superclass = void 0;
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Hello Word!!!');
    }
}
exports.Superclass = Superclass;
class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
exports.Subclass = Subclass;
const myFunc = (obj) => {
    obj.sayHello();
    const testingIfIsSuper = obj.isSuper ? 'Super' : 'Sub';
    console.log(testingIfIsSuper);
};
exports.myFunc = myFunc;
