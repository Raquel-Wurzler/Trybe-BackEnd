// ConsoleNotification.ts

import Notificator from "./Notificator";

class ConsoleNotification implements Notificator {
  constructor(private name: string) { }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}

export default ConsoleNotification;