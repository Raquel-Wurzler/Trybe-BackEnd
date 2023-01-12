"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("./example");
const example1_1 = require("./example1");
const example3_1 = require("./example3");
const example4_1 = require("./example4");
const example5_1 = require("./example5");
const example6_1 = require("./example6");
const example7_1 = require("./example7");
// example
const tiger = new example_1.Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const main = (animal) => {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
const parrot = new example_1.Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
parrot.fly();
// example1
const pai = new example1_1.Superclass();
const filho = new example1_1.Subclass();
(0, example1_1.myFunc)(pai);
(0, example1_1.myFunc)(filho);
// example3
const myClass = new example3_1.MyClass(25);
console.log(myClass.myFunc(25));
//example4
const socialMediaAccount = new example4_1.SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();
// example5
const socialMediaAccount2 = new example5_1.SocialMediaAccount2();
const friendCarol = new example5_1.Friend();
friendCarol.setNickname('Carol');
const friendFernando = new example5_1.Friend();
friendFernando.setNickname('Fernando');
socialMediaAccount2.addFriend(friendCarol);
socialMediaAccount2.addFriend(friendFernando);
socialMediaAccount2.printFriends();
// example6
const logger1 = new example6_1.ConsoleLogger();
const logger2 = new example6_1.ConsoleLogger2();
const database1 = new example6_1.ExampleDatabase(logger1);
const database2 = new example6_1.ExampleDatabase(logger2);
const database3 = new example6_1.ExampleDatabase();
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
// example7
const s1 = new example7_1.SalesContract();
const pp1 = new example7_1.NaturalPerson('Tony', '123456789');
const pp2 = new example7_1.NaturalPerson('Lilly', '987654321');
const lp = new example7_1.LegalPerson('International Sales SA', '23961237162378');
s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();
