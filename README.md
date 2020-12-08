<div align="center"><img src="./logo.gif"> <h1>Brasil API Promise</h1></div>

<div align="center">
  <p>
    <strong>Bibiloteca de integração com <a href="https://github.com/BrasilAPI/BrasilAPI/">Brasil API</a></strong>
  </p>
</div>

## Motivo
Para centralizar e tornar mais facil a utilização da API disponibilizada, foi criada funções especificas abstraindo aplicação de API.

## Utilização

Para instalar a lib é nescessario instala-la

```npm install brasil-api-promise```

## Funções

### Buscar cep - fetchCep

```javascript
import { fetchCep } from 'brasil-api-promise'

fetchCep('05010000').then(response => {
    console.log(response)
}).catch(error => {
    console.error(error)
})
```

#### Sucesso
```json
{
  "cep": "05010000",
  "state": "SP",
  "city": "São Paulo",
  "neighborhood": "Perdizes",
  "street": "Rua Caiubi"
}
```

#### Erro - não encontrado
```json
{
  "message": "Todos os serviços de CEP retornaram erro."
}
```

#### Erro - problema de conexão

```json
{
  "code": "EAI_AGAIN",
  "errno": "EAI_AGAIN",
  "message": "request to https://brasilapi.com.br/api/cep/v1/12345678 failed, reason: getaddrinfo EAI_AGAIN brasilapi.com.br",
  "type": "system"
}
```

### Futuro

Por enquanto só possuimos a rota de CEP implementada na API, então a lib só suporta isso, porém quando for lançadas novas rotas, iremos evoluindo a lib.
