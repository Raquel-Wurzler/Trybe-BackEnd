"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normasDeUso_1 = __importDefault(require("./normas/normasDeUso"));
const Quadra_1 = __importDefault(require("./Quadra"));
class QuadraTenis extends Quadra_1.default {
    constructor() {
        super(...arguments);
        // busca os dados da quadra referenciada
        this.tenisData = normasDeUso_1.default.tenis;
    }
    reservar(horaReserva) {
        // gerando protocolo de agendamento
        const protocolo = (Math.random() + 1).toString(30).substring(3);
        return {
            protocolo,
            data: horaReserva,
            regras: this.tenisData,
        };
    }
}
exports.default = QuadraTenis;
