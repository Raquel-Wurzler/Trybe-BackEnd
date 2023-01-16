"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraFutebol = void 0;
const Quadra_1 = __importDefault(require("./Quadra"));
const normasDeUso_1 = __importDefault(require("./normas/normasDeUso"));
class QuadraFutebol extends Quadra_1.default {
    constructor() {
        super(...arguments);
        this.futebolData = normasDeUso_1.default.futebol;
    }
    reservar(reserva) {
        const protocolo = (Math.random() + 1).toString(30).substring(3);
        return {
            protocolo,
            data: reserva,
            regras: this.futebolData,
        };
    }
}
exports.QuadraFutebol = QuadraFutebol;
