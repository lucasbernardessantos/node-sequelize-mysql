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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Trabalhador_js_1 = require("./models/Trabalhador.js");
const trabalhadorDAO_js_1 = require("./data/trabalhadorDAO.js");
const db = require('./data/db.js');
const app = (0, express_1.default)();
const port = process.env.port || 8080;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send('Página Inicial');
}));
app.post('/cadastrarTrabalhador', (req, res) => {
    let auxTrabalhador = req.body;
    let trabalhador = new Trabalhador_js_1.Trabalhador(0, auxTrabalhador.nome, auxTrabalhador.email);
    trabalhadorDAO_js_1.trabalhadorDAO.cadastrar(trabalhador);
    res.status(201).send('Trabalhador cadastrado com sucesso.');
});
