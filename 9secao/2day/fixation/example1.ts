export class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() {
    console.log('Hello Word!!!');
  }
}

export class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

export const myFunc = (obj: Superclass) => {
  obj.sayHello();
  const testingIfIsSuper = obj.isSuper ? 'Super' : 'Sub';
  console.log(testingIfIsSuper);
  
}