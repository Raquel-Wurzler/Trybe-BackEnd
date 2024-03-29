import Quadra from "./Quadra";
import normas from "./normas/normasDeUso";
import { IFutebol } from "./interfaces/IFutebol";
import { IAgenda } from "./interfaces/IAgenda";

export class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;
  public reservar<IFutebol>(reserva: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: reserva,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}