import { Animal, Bird, Mammal, myMove } from "./example";
import { LongRangeCharacter, MeleeCharacter, youCharacter } from "./example1";
import Employee from "./example2";
import { LegalPerson, PhysicalPerson, showIdentification } from "./example3";

// example
const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

myMove(a);
myMove(b);
myMove(m);

// example1
const mCharacter = new MeleeCharacter();
const longCharacter = new LongRangeCharacter();

youCharacter(mCharacter);
youCharacter(longCharacter);

// example2
console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
// Enum

// example3
const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);