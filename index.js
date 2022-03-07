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
exports.getEstadoBySigla = exports.getEstados = exports.getMunicipios = exports.getPrecoVeiculoByCodigoFipe = exports.getTabelaFipeByTipoVeiculo = exports.getTabelaFipe = exports.getFeriadosByAno = exports.getDDD = exports.getCnpj = exports.getBankByCode = exports.getBanks = exports.getCepV2 = exports.getCep = void 0;
const URL_API = 'https://brasilapi.com.br/api/';
const CEP_API = URL_API + 'cep/v1/';
const CEP_API_V2 = URL_API + 'cep/v2/';
const BANK_API = URL_API + 'banks/v1/';
const CNPJ_API = URL_API + 'cnpj/v1/';
const DDD_API = URL_API + 'ddd/v1/';
const FERIADOS_API = URL_API + 'feriados/v1/';
const FIPE_API = URL_API + 'fipe/v1/';
const FIPE_API_MARCAS = URL_API + 'fipe/marcas/v1/';
const FIPE_API_PRECOS = URL_API + 'fipe/preco/v1/';
const IBGE_API = URL_API + 'ibge/municipios/v1/';
const IBGE_API_ESTADOS = URL_API + 'ibge/uf/v1';
function fetchJson(endpoint, arg) {
    return __awaiter(this, void 0, void 0, function* () {
        const jsonPromisse = yield fetch(endpoint + arg);
        const json = yield jsonPromisse.json();
        const error = json.errors && json.errors.length > 0;
        if (error) {
            throw {
                message: json.message
            };
        }
        return json;
    });
}
const getCep = (cep) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(CEP_API, cep);
});
exports.getCep = getCep;
const getCepV2 = (cep) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(CEP_API_V2, cep);
});
exports.getCepV2 = getCepV2;
const getBanks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(BANK_API);
});
exports.getBanks = getBanks;
const getBankByCode = (code) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(BANK_API, code);
});
exports.getBankByCode = getBankByCode;
const getCnpj = (cnpj) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(CNPJ_API, cnpj);
});
exports.getCnpj = getCnpj;
const getDDD = (ddd) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(DDD_API, ddd);
});
exports.getDDD = getDDD;
const getFeriadosByAno = (ano) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(FERIADOS_API, ano);
});
exports.getFeriadosByAno = getFeriadosByAno;
const getTabelaFipe = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(FIPE_API);
});
exports.getTabelaFipe = getTabelaFipe;
const getTabelaFipeByTipoVeiculo = (veiculo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(FIPE_API_MARCAS, veiculo);
});
exports.getTabelaFipeByTipoVeiculo = getTabelaFipeByTipoVeiculo;
const getPrecoVeiculoByCodigoFipe = (codigoFipe) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(FIPE_API_PRECOS, codigoFipe);
});
exports.getPrecoVeiculoByCodigoFipe = getPrecoVeiculoByCodigoFipe;
const getMunicipios = (siglaUF) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(IBGE_API, siglaUF);
});
exports.getMunicipios = getMunicipios;
const getEstados = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(IBGE_API_ESTADOS);
});
exports.getEstados = getEstados;
const getEstadoBySigla = (siglaUF) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetchJson(IBGE_API_ESTADOS, siglaUF);
});
exports.getEstadoBySigla = getEstadoBySigla;
