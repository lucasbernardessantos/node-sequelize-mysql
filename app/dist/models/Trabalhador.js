"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabalhador = void 0;
class Trabalhador {
    constructor(id, nome, email, sexo, salario) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.sexo = sexo;
        this.salario = salario;
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
    get Sexo() {
        return this.sexo;
    }
    set Sexo(sexo) {
        this.sexo = sexo;
    }
    get Salario() {
        return this.salario;
    }
    set Salario(salario) {
        this.salario = salario;
    }
}
exports.Trabalhador = Trabalhador;
