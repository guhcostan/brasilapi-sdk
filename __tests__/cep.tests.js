import {getCep} from "../index";

beforeAll(() => {
    global.fetch = require("node-fetch");
})

it('should get cep data', () => {
    const spy = jest.spyOn(global.console, 'error')
    return getCep('05010000').then(response => {
        expect(response).toStrictEqual({
            "cep": "05010000",
            "state": "SP",
            "city": "São Paulo",
            "service": "viacep",
            "neighborhood": "Perdizes",
            "street": "Rua Caiubi"
        })
        expect(spy).not.toHaveBeenCalled()
    })
})

it('should not get cep data', () => {
    const spy = jest.spyOn(global.console, 'error')
    return getCep('12345678').catch(e => {
        expect(e).toStrictEqual({
            message: 'Todos os serviços de CEP retornaram erro.'
        })
        expect(spy).not.toHaveBeenCalled()
    })
})

it('should not get cep data because network error', () => {
    const spy = jest.spyOn(global.console, 'error')
    window.fetch = jest.fn();
    return getCep('12345678').catch(e => {
        expect(e).toBeTruthy()
        expect(spy).not.toHaveBeenCalled()
    })
})
