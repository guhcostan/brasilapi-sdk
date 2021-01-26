const CEP_API = 'https://brasilapi.com.br/api/cep/v1/'

export const fetchCep = async (cep) => {
   const jsonPromisse = await fetch(CEP_API + cep)
   const json = await jsonPromisse.json()
   const error = json.errors && json.errors.length > 0
   if (error) {
      throw {
         message: json.message
      }
   }
   return json
}
