"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trabalhadorDAO = void 0;
const TrabalhadorModel_js_1 = require("./models/TrabalhadorModel.js");
const db_js_1 = require("./db.js");
class trabalhadorDAO {
    static cadastrar(trabalhador) {
        return __awaiter(this, void 0, void 0, function* () {
            let sequelize = db_js_1.db.criarConexao();
            try {
                yield TrabalhadorModel_js_1.TrabalhadorModel.create({ nome: trabalhador.Nome, email: trabalhador.Email, sexo: trabalhador.Sexo, salario: trabalhador.Salario });
            }
            catch (err) {
                throw err;
            }
            finally {
                sequelize.close();
            }
        });
    }
    static selecionarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            let sequelize = db_js_1.db.criarConexao();
            try {
                let dados = yield TrabalhadorModel_js_1.TrabalhadorModel.findAll();
                let trabalhadoresJSON = [];
                dados.forEach((trabalhador) => {
                    trabalhadoresJSON.push(trabalhador.toJSON());
                });
                return trabalhadoresJSON;
            }
            catch (err) {
                throw err;
            }
            finally {
                sequelize.close();
            }
        });
    }
    static modificarTrabalhador(trabalhador) {
        return __awaiter(this, void 0, void 0, function* () {
            let sequelize = db_js_1.db.criarConexao();
            try {
                let linhasModificadas = yield TrabalhadorModel_js_1.TrabalhadorModel.update({
                    nome: trabalhador.nome,
                    email: trabalhador.email,
                    sexo: trabalhador.sexo,
                    salario: trabalhador.salario
                }, {
                    where: {
                        id: trabalhador.id
                    }
                });
                return linhasModificadas[0];
            }
            catch (err) {
                throw err;
            }
            finally {
                sequelize.close();
            }
        });
    }
    static deletarTrabalhador(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let sequelize = db_js_1.db.criarConexao();
            try {
                let linhasModificadas = yield TrabalhadorModel_js_1.TrabalhadorModel.destroy({
                    where: {
                        id: id
                    }
                });
                return linhasModificadas;
            }
            catch (err) {
                throw err;
            }
            finally {
                sequelize.close();
            }
        });
    }
}
exports.trabalhadorDAO = trabalhadorDAO;
