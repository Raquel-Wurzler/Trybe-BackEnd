interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

export class MyClass implements MyInterface {
  constructor(public myNumber: number) {}
  myFunc(myParam: number): string {
      const sum = this.myNumber + myParam;
      return `Total ${sum}`;
  }
}