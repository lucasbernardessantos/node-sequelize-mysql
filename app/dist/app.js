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
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const Trabalhador_js_1 = require("./models/Trabalhador.js");
const trabalhadorDAO_js_1 = require("./data/trabalhadorDAO.js");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
const port = process.env.port || 8080;
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send('Página Inicial');
}));
app.post('/cadastrarTrabalhador', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let auxTrabalhador = req.body;
    let trabalhador = new Trabalhador_js_1.Trabalhador(0, auxTrabalhador.nome, auxTrabalhador.email, auxTrabalhador.sexo, auxTrabalhador.salario);
    yield trabalhadorDAO_js_1.trabalhadorDAO.cadastrar(trabalhador);
    res.status(200).send('Trabalhador cadastrado com sucesso.');
}));
app.get('/selecionarTodos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let trabalhadores = yield trabalhadorDAO_js_1.trabalhadorDAO.selecionarTodos();
    res.status(200).send(trabalhadores);
}));
app.put('/modificarTrabalhador', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let auxTrabalhador = req.body;
    let linhasModificadas = yield trabalhadorDAO_js_1.trabalhadorDAO.modificarTrabalhador(auxTrabalhador);
    res.sendStatus(200).send(linhasModificadas);
}));
app.delete('/deletarTrabalhador', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let auxTrabalhador = req.body;
    let linhasModificadas = yield trabalhadorDAO_js_1.trabalhadorDAO.deletarTrabalhador(auxTrabalhador.id);
    res.status(200).send(`Trabalhador deletado com sucesso.\nLinhas Modificadas: ${linhasModificadas}`);
}));
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
