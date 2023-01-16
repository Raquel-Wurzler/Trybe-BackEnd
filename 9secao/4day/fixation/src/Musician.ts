import Instrument from "./Instrument";
import Flute from "./Flute";

export default class Musician {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta'),
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`,
    );
  }
}