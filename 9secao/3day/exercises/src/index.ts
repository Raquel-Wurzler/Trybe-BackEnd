import Clube from "./Clube";
import { QuadraFutebol } from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube1 = new Clube();
const quadra1 = new QuadraFutebol();
clube1.adicionarQuadra(quadra1);
const dataParaReserva = new Date();

const reservarQuadraFutebol = clube1.buscarQuadra<QuadraFutebol>(0)
  .reservar(dataParaReserva);
console.log(reservarQuadraFutebol);

const quadra2 = new QuadraTenis()
clube1.adicionarQuadra(quadra2);
const reservaQuadraTenis = clube1.buscarQuadra<QuadraTenis>(0).reservar(dataParaReserva);
console.log(reservaQuadraTenis);
