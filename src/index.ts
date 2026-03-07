import { BrasilAPIClient } from './client.js';
import { CepModule } from './modules/cep.js';
import { CnpjModule } from './modules/cnpj.js';
import { BanksModule } from './modules/banks.js';
import { DddModule } from './modules/ddd.js';
import { FeriadosModule } from './modules/feriados.js';
import { FipeModule } from './modules/fipe.js';
import { IbgeModule } from './modules/ibge.js';
import { CambioModule } from './modules/cambio.js';
import { CorretorasModule } from './modules/corretoras.js';
import { CptecModule } from './modules/cptec.js';
import { IsbnModule } from './modules/isbn.js';
import { NcmModule } from './modules/ncm.js';
import { PixModule } from './modules/pix.js';
import { RegistroBrModule } from './modules/registro-br.js';
import { TaxasModule } from './modules/taxas.js';

export * from './types.js';
export {
  BrasilAPIError,
  NetworkError,
  NotFoundError,
  ValidationError,
} from './errors.js';
export { BrasilAPIClient } from './client.js';

const client = new BrasilAPIClient();

export const cep = () => new CepModule(client);
export const cnpj = () => new CnpjModule(client);
export const banks = () => new BanksModule(client);
export const ddd = () => new DddModule(client);
export const feriados = () => new FeriadosModule(client);
export const fipe = () => new FipeModule(client);
export const ibge = () => new IbgeModule(client);
export const cambio = () => new CambioModule(client);
export const corretoras = () => new CorretorasModule(client);
export const cptec = () => new CptecModule(client);
export const isbn = () => new IsbnModule(client);
export const ncm = () => new NcmModule(client);
export const pix = () => new PixModule(client);
export const registroBr = () => new RegistroBrModule(client);
export const taxas = () => new TaxasModule(client);

const BrasilAPI = {
  cep,
  cnpj,
  banks,
  ddd,
  feriados,
  fipe,
  ibge,
  cambio,
  corretoras,
  cptec,
  isbn,
  ncm,
  pix,
  registroBr,
  taxas,
};

export default BrasilAPI;
