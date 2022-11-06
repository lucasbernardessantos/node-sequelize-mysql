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
class trabalhadorDAO {
    static cadastrar(trabalhador) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield TrabalhadorModel_js_1.TrabalhadorModel.create({ nome: trabalhador.Nome, email: trabalhador.Email });
                console.log(`${trabalhador.Nome} cadastrado com sucesso.`);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.trabalhadorDAO = trabalhadorDAO;
