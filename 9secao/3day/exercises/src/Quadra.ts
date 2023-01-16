import { IAgenda } from "./interfaces/IAgenda";

abstract class Quadra {
  protected abstract reservar<T>(reserva: Date): IAgenda <T>;
}

export default Quadra;