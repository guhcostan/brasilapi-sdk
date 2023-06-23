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
import BrasilAPI from 'brasil-api-promise'

const cepApi = BrasilAPI.cep()
const cepResult = await cepApi.getCep('05010000')

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

### Buscar feriados por ano - getFeriadosByAno

```javascript
import BrasilAPI from 'brasil-api-promise'

const feriados = await BrasilAPI.getFeriadosByAno(1997)

```

#### Sucesso
```json
[
   {
      "date":"1997-01-01",
      "name":"Confraternização mundial",
      "type":"national"
   },
   {
      "date":"1997-02-11",
      "name":"Carnaval",
      "type":"national"
   },
   {
      "date":"1997-03-30",
      "name":"Páscoa",
      "type":"national"
   },
   {
      "date":"1997-04-21",
      "name":"Tiradentes",
      "type":"national"
   },
   {
      "date":"1997-05-01",
      "name":"Dia do trabalho",
      "type":"national"
   },
   {
      "date":"1997-05-29",
      "name":"Corpus Christi",
      "type":"national"
   },
   {
      "date":"1997-09-07",
      "name":"Independência do Brasil",
      "type":"national"
   },
   {
      "date":"1997-10-12",
      "name":"Nossa Senhora Aparecida",
      "type":"national"
   },
   {
      "date":"1997-11-02",
      "name":"Finados",
      "type":"national"
   },
   {
      "date":"1997-11-15",
      "name":"Proclamação da República",
      "type":"national"
   },
   {
      "date":"1997-12-25",
      "name":"Natal",
      "type":"national"
   }
]
```

#### Erro - não encontrado
```json
{
  "message":"Ano fora do intervalo suportado entre 1900 e 2199.","type":"feriados_range_error","name":"NotFoundError"
}
```

#### Erro - problema de conexão

```json
{
  "code": "EAI_AGAIN",
  "errno": "EAI_AGAIN",
  "message": "request to https://brasilapi.com.br/api/feriados/v1/1997 failed, reason: getaddrinfo EAI_AGAIN brasilapi.com.br",
  "type": "system"
}
```
