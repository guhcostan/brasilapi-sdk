import { BrasilAPIClient } from '../client.js';
import type {
  FipeMarcaResponse,
  FipeVeiculoResponse,
  FipeTabelaReferenciaResponse,
  FipePrecoResponse,
  TipoVeiculo,
} from '../types.js';

export class FipeModule {
  constructor(private client: BrasilAPIClient) {}

  async getTabelaFipe(): Promise<FipeTabelaReferenciaResponse[]> {
    return this.client.get<FipeTabelaReferenciaResponse[]>('/fipe/tabelas/v1');
  }

  async getMarcas(
    tipoVeiculo?: TipoVeiculo,
    tabelaReferencia?: number
  ): Promise<FipeMarcaResponse[]> {
    const path = tipoVeiculo
      ? `/fipe/marcas/v1/${tipoVeiculo}`
      : '/fipe/marcas/v1';
    const query = tabelaReferencia
      ? `?tabela_referencia=${tabelaReferencia}`
      : '';
    return this.client.get<FipeMarcaResponse[]>(`${path}${query}`);
  }

  async getVeiculos(
    tipoVeiculo: TipoVeiculo,
    codigoMarca: number,
    tabelaReferencia?: number
  ): Promise<FipeVeiculoResponse[]> {
    const query = tabelaReferencia
      ? `?tabela_referencia=${tabelaReferencia}`
      : '';
    return this.client.get<FipeVeiculoResponse[]>(
      `/fipe/veiculos/v1/${tipoVeiculo}/${codigoMarca}${query}`
    );
  }

  async getPrecoVeiculo(
    codigoFipe: string,
    tabelaReferencia?: number
  ): Promise<FipePrecoResponse[]> {
    const query = tabelaReferencia
      ? `?tabela_referencia=${tabelaReferencia}`
      : '';
    return this.client.get<FipePrecoResponse[]>(
      `/fipe/preco/v1/${codigoFipe}${query}`
    );
  }
}
