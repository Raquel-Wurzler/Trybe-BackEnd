export interface Logger {
  log(parametro: string): void;
}

export class ConsoleLogger implements Logger {
  log(parametro: string): void {
    console.log(`Logger1 ${parametro}`);
    
  }
}

export class ConsoleLogger2 implements Logger {
  log(parametro: string): void {
    console.log(`Logger2 ${parametro}`);
    
  }
}

export interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

export class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  save(key: string, value: string): void {
    this.logger.log(`key: ${key} - value: ${value}`)
  }
}