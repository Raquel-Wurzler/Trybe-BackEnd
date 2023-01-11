import Person from "./example";
import TV from "./example2";
import People from "./example3";
import { Email, MailList } from "./example4";

// example
console.log('---------example');

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

// example2
console.log('---------example2');

const tv1 = new TV('Sansung', 100, '85 polegadas', ['Ethernet', 'HDMI']);
const tv2 = new TV('Panasonic', 80, '65 polegadas', ['Ethernet', 'HDMI']);

console.log(tv1.getBrand(), tv1.getSize(), tv1.getResolution(), tv1.getConnections());
console.log(tv2.getBrand(), tv2.getSize(), tv2.getResolution(), tv2.getConnections());

tv1.turnOn();
tv2.turnOn();

// Valor válido
tv1.connectedTo = 'HDMI';
console.log(tv1.connectedTo);

// Valor inválido
tv1.connectedTo = 'USB';
console.log(tv1.connectedTo);

// example3
console.log('---------example3');

const people1 = new People('Maria', 171, 58, 19);
const people2 = new People('João', 175, 66, 18);

console.log(people1);
console.log(people2);

// Alteração direta de variável pública
people1.name = 'Mariah';
// Acesso direto a variável pública
console.log(people1.name);
// Acesso a método público que manipula atributo privado
console.log(people1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(people2.age);
// Acesso a método público que manipula atributo privado
people2.birthday();
console.log(people2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
people2.age = 17;
console.log(people2.age);
// Leitura de atributo readonly
console.log(people1.height);
// Acesso a método com setter para manipular atributo privado como se fosse público, porém diferente da validação
people2.age = 300;
console.log(people2.age);

// example4
console.log('---------example4');

const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new Email(
  myEmail,
  friendEmail,
  'Car wash',
  'There\'s a new car wash in town. Did you know?',
);
const email2 = new Email(
  friendEmail,
  myEmail,
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?',
);
const email3 = new Email(
  myEmail,
  friendEmail,
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth',
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`,
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom(myEmail).forEach(
  (mail) => console.log(mail.content),
);

const email6 = new Email(
  myEmail,
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we\'ll have Monday off.
   Want to go to the movies?`,
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getEmailsBySubject('Day off').forEach(
  (mail) => console.log(mail.content),
);
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content),
);

console.log('------ personalMailList.all:');
personalMailList.all.forEach(
  (mail) => console.log(mail.content),
);