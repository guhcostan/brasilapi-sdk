export interface BrasilAPIError {
  message: string;
  type?: string;
  name?: string;
}

export interface CepResponse {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service?: string;
}

export interface CepV2Response extends CepResponse {
  location: {
    type: 'Point';
    coordinates: {
      longitude: string;
      latitude: string;
    };
  };
}

export interface BankResponse {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

export interface CNPJQsa {
  pais: string | null;
  nome_socio: string;
  codigo_pais: string | null;
  faixa_etaria: string;
  cnpj_cpf_do_socio: string;
  qualificacao_socio: string;
  codigo_faixa_etaria: number;
  data_entrada_sociedade: string;
  identificador_de_socio: number;
  cpf_representante_legal: string;
  nome_representante_legal: string;
  codigo_qualificacao_socio: number;
  qualificacao_representante_legal: string;
  codigo_qualificacao_representante_legal: number;
}

export interface CNPJCnae {
  codigo: number;
  descricao: string;
}

export interface CNPJRegimeTributario {
  ano: number;
  cnpj_da_scp: string | null;
  forma_de_tributacao: string;
  quantidade_de_escrituracoes: number;
}

export interface CNPJResponse {
  uf: string;
  cep: string;
  qsa: CNPJQsa[];
  cnpj: string;
  pais: string | null;
  email: string | null;
  porte: string;
  bairro: string;
  numero: string;
  ddd_fax: string;
  municipio: string;
  logradouro: string;
  cnae_fiscal: number;
  codigo_pais: string | null;
  complemento: string;
  codigo_porte: number;
  razao_social: string;
  nome_fantasia: string;
  capital_social: number;
  ddd_telefone_1: string;
  ddd_telefone_2: string;
  opcao_pelo_mei: string | null;
  descricao_porte: string;
  codigo_municipio: number;
  cnaes_secundarios: CNPJCnae[];
  natureza_juridica: string;
  regime_tributario: CNPJRegimeTributario[];
  situacao_especial: string;
  opcao_pelo_simples: string | null;
  situacao_cadastral: number;
  data_opcao_pelo_mei: string | null;
  data_exclusao_do_mei: string | null;
  cnae_fiscal_descricao: string;
  codigo_municipio_ibge: number;
  data_inicio_atividade: string;
  data_situacao_especial: string | null;
  data_opcao_pelo_simples: string | null;
  data_situacao_cadastral: string;
  nome_cidade_no_exterior: string;
  codigo_natureza_juridica: number;
  data_exclusao_do_simples: string | null;
  motivo_situacao_cadastral: number;
  ente_federativo_responsavel: string;
  identificador_matriz_filial: number;
  qualificacao_do_responsavel: number;
  descricao_situacao_cadastral: string;
  descricao_tipo_de_logradouro: string;
  descricao_motivo_situacao_cadastral: string;
  descricao_identificador_matriz_filial: string;
}

export interface DDDResponse {
  state: string;
  cities: string[];
}

export interface FeriadoResponse {
  date: string;
  name: string;
  type: string;
}

export interface FipeMarcaResponse {
  nome: string;
  valor: string;
}

export interface FipeVeiculoResponse {
  modelo: string;
}

export interface FipeTabelaReferenciaResponse {
  codigo: number;
  mes: string;
}

export interface FipePrecoResponse {
  valor: string;
  marca: string;
  modelo: string;
  anoModelo: number;
  combustivel: string;
  codigoFipe: string;
  mesReferencia: string;
  tipoVeiculo: number;
  siglaCombustivel: string;
  dataConsulta: string;
}

export type TipoVeiculo = 'caminhoes' | 'carros' | 'motos';

export interface IBGEEstadoRegiao {
  id: number;
  sigla: string;
  nome: string;
}

export interface IBGEEstadoResponse {
  id: number;
  sigla: string;
  nome: string;
  regiao: IBGEEstadoRegiao;
}

export interface IBGEMunicipioResponse {
  nome: string;
  codigo_ibge: string;
}

export interface CambioMoedaResponse {
  simbolo: string;
  nome: string;
  tipo_moeda: string;
}

export interface CambioCotacao {
  paridade_compra: number;
  paridade_venda: number;
  cotacao_compra: number;
  cotacao_venda: number;
  data_hora_cotacao: string;
  tipo_boletim: string;
}

export interface CambioCotacaoResponse {
  cotacoes: CambioCotacao[];
  moeda: string;
  data: string;
}

export interface CorretoraResponse {
  bairro: string;
  cep: string;
  cnpj: string;
  codigo_cvm: string;
  complemento: string;
  data_inicio_situacao: string;
  data_patrimonio_liquido: string;
  data_registro: string;
  email: string;
  logradouro: string;
  municipio: string;
  nome_social: string;
  nome_comercial: string;
  pais: string;
  status: string;
  telefone: string;
  type: string;
  uf: string;
  valor_patrimonio_liquido: string;
}

export interface CptecCidadeResponse {
  nome: string;
  estado: string;
  id: number;
}

export interface CptecClimaCapitalResponse {
  codigo_icao: string;
  atualizado_em: string;
  pressao_atmosferica: string;
  visibilidade: string;
  vento: number;
  direcao_vento: number;
  umidade: number;
  condicao: string;
  condicao_Desc: string;
  temp: number;
}

export interface CptecPrevisaoClima {
  data: string;
  condicao: string;
  min: number;
  max: number;
  indice_uv: number;
  condicao_desc: string;
}

export interface CptecPrevisaoResponse {
  cidade: string;
  estado: string;
  atualizado_em: string;
  clima: CptecPrevisaoClima[];
}

export interface CptecOndaDado {
  vento: number;
  direcao_vento: string;
  direcao_vento_desc: string;
  altura_onda: number;
  direcao_onda: string;
  direcao_onda_desc: string;
  agitacao: string;
  hora: string;
}

export interface CptecOnda {
  data: string;
  dados_ondas: CptecOndaDado[];
}

export interface CptecOndaResponse {
  cidade: string;
  estado: string;
  atualizado_em: string;
  ondas: CptecOnda[];
}

export interface ISBNResponse {
  isbn: string;
  title: string;
  subtitle: string | null;
  authors: string[];
  publisher: string;
  synopsis: string;
  dimensions: {
    width: number;
    height: number;
    unit: string;
  };
  year: number;
  format: string;
  page_count: number;
  subjects: string[];
  location: string;
  retail_price: string | null;
  cover_url: string;
  provider: string;
}

export interface NCMResponse {
  codigo: string;
  descricao: string;
  data_inicio: string;
  data_fim: string;
  tipo_ato: string;
  numero_ato: string;
  ano_ato: string;
}

export interface PixParticipanteResponse {
  ispb: string;
  nome: string;
  nome_reduzido: string;
  modalidade_participacao: string;
  tipo_participacao: string;
  inicio_operacao: string;
}

export interface RegistroBRResponse {
  status_code: number;
  status: string;
  fqdn: string;
  hosts: string[];
  publication_status: string;
  expires_at: string;
  suggestions: string[];
}

export interface TaxaResponse {
  nome: string;
  valor: number;
}
