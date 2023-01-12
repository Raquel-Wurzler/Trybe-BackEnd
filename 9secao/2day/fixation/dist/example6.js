"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleDatabase = exports.ConsoleLogger2 = exports.ConsoleLogger = void 0;
class ConsoleLogger {
    log(parametro) {
        console.log(`Logger1 ${parametro}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
class ConsoleLogger2 {
    log(parametro) {
        console.log(`Logger2 ${parametro}`);
    }
}
exports.ConsoleLogger2 = ConsoleLogger2;
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`key: ${key} - value: ${value}`);
    }
}
exports.ExampleDatabase = ExampleDatabase;
