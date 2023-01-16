"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("./example");
const example1_1 = require("./example1");
const example2_1 = __importDefault(require("./example2"));
const example3_1 = require("./example3");
// example
const a = new example_1.Animal('Tubarão');
const b = new example_1.Bird('Papagaio');
const m = new example_1.Mammal('Tatu');
(0, example_1.myMove)(a);
(0, example_1.myMove)(b);
(0, example_1.myMove)(m);
// example1
const mCharacter = new example1_1.MeleeCharacter();
const longCharacter = new example1_1.LongRangeCharacter();
(0, example1_1.youCharacter)(mCharacter);
(0, example1_1.youCharacter)(longCharacter);
// example2
console.log(example2_1.default.employees);
const e1 = new example2_1.default('Ronald');
console.log(example2_1.default.employees);
const e2 = new example2_1.default('Cíntia');
console.log(example2_1.default.employees);
// Enum
// example3
const pp0 = new example3_1.PhysicalPerson('John', '123456789');
const pp1 = new example3_1.PhysicalPerson('Jenny', '987654321');
const lp = new example3_1.LegalPerson('International Sales SA', '834729384723');
(0, example3_1.showIdentification)(pp0);
(0, example3_1.showIdentification)(pp1);
(0, example3_1.showIdentification)(lp);
