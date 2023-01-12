import { Mammal, Animal, Bird } from "./example";
import { myFunc, Subclass, Superclass } from "./example1";
import { MyClass } from "./example3";
import { SocialMediaAccount } from "./example4";
import { SocialMediaAccount2, Friend } from "./example5";
import { ConsoleLogger, ConsoleLogger2, ExampleDatabase } from "./example6";
import { SalesContract, NaturalPerson, LegalPerson } from "./example7";

// example
const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();

// example1
const pai = new Superclass();
const filho = new Subclass();

myFunc(pai);
myFunc(filho);

// example3
const myClass = new MyClass(25);
console.log(myClass.myFunc(25));

//example4
const socialMediaAccount = new SocialMediaAccount();
socialMediaAccount.editProfile('Manuella', 'manu@trybe.com');
socialMediaAccount.printProfile();

// example5
const socialMediaAccount2 = new SocialMediaAccount2();

const friendCarol = new Friend();
friendCarol.setNickname('Carol');

const friendFernando = new Friend();
friendFernando.setNickname('Fernando');

socialMediaAccount2.addFriend(friendCarol);
socialMediaAccount2.addFriend(friendFernando);
socialMediaAccount2.printFriends();

// example6
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');

// example7
const s1 = new SalesContract();
const pp1 = new NaturalPerson('Tony', '123456789');
const pp2 = new NaturalPerson('Lilly', '987654321');
const lp = new LegalPerson('International Sales SA', '23961237162378');

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