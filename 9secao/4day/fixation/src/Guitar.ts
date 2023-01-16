import Instrument from "./Instrument";

export class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}