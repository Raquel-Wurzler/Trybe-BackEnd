"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clube_1 = __importDefault(require("./Clube"));
const QuadraFutebol_1 = require("./QuadraFutebol");
const QuadraTenis_1 = __importDefault(require("./QuadraTenis"));
const clube1 = new Clube_1.default();
const quadra1 = new QuadraFutebol_1.QuadraFutebol();
clube1.adicionarQuadra(quadra1);
const dataParaReserva = new Date();
const reservarQuadraFutebol = clube1.buscarQuadra(0)
    .reservar(dataParaReserva);
console.log(reservarQuadraFutebol);
const quadra2 = new QuadraTenis_1.default();
clube1.adicionarQuadra(quadra2);
const reservaQuadraTenis = clube1.buscarQuadra(0).reservar(dataParaReserva);
console.log(reservaQuadraTenis);
