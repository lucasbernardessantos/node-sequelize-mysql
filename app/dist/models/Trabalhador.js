"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabalhador = void 0;
class Trabalhador {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    get ID() {
        return this.id;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(nome) {
        this.nome = nome;
    }
    get Email() {
        return this.email;
    }
    set Email(email) {
        this.email = email;
    }
}
exports.Trabalhador = Trabalhador;
