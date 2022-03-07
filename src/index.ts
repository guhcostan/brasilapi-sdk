const URL_API = 'https://brasilapi.com.br/api/'
const CEP_API = URL_API+'cep/v1/'
const CEP_API_V2 = URL_API+'cep/v2/'
const BANK_API = URL_API+'banks/v1/'
const CNPJ_API = URL_API+'cnpj/v1/'
const DDD_API = URL_API+'ddd/v1/'
const FERIADOS_API = URL_API+'feriados/v1/'
const FIPE_API = URL_API+'fipe/v1/'
const FIPE_API_MARCAS = URL_API+'fipe/marcas/v1/'
const FIPE_API_PRECOS = URL_API+'fipe/preco/v1/'
const IBGE_API = URL_API+'ibge/municipios/v1/'
const IBGE_API_ESTADOS = URL_API+'ibge/uf/v1'

async function fetchJson(endpoint: string, arg?: any) {
   const jsonPromisse = await fetch(endpoint + arg)
   const json = await jsonPromisse.json()
   const error = json.errors && json.errors.length > 0
   if (error) {
      throw {
         message: json.message
      }
   }
   return json
}

export const getCep = async (cep: string) => {
   return await fetchJson(CEP_API, cep);
}

export const getCepV2 = async (cep: string) => {
   return await fetchJson(CEP_API_V2, cep);
}

export const getBanks = async () => {
   return await fetchJson(BANK_API);
}

export const getBankByCode = async (code: number) => {
   return await fetchJson(BANK_API, code);
}

export const getCnpj = async (cnpj: string) => {
   return await fetchJson(CNPJ_API, cnpj);
}

export const getDDD = async (ddd: number) => {
   return await fetchJson(DDD_API, ddd);
}

export const getFeriadosByAno = async (ano: number) => {
   return await fetchJson(FERIADOS_API, ano);
}

export const getTabelaFipe = async () => {
   return await fetchJson(FIPE_API);
}

export const getTabelaFipeByTipoVeiculo = async (veiculo: 'caminhoes'| 'carros' | 'motos') => {
   return await fetchJson(FIPE_API_MARCAS, veiculo);
}

export const getPrecoVeiculoByCodigoFipe = async (codigoFipe: string) => {
   return await fetchJson(FIPE_API_PRECOS, codigoFipe);
}

export const getMunicipios = async (siglaUF: string) => {
   return await fetchJson(IBGE_API, siglaUF);
}

export const getEstados = async () => {
   return await fetchJson(IBGE_API_ESTADOS);
}

export const getEstadoBySigla = async (siglaUF: string) => {
   return await fetchJson(IBGE_API_ESTADOS, siglaUF);
}
