const { validateSenha, validateAge,onSubmit } = require('./tests')

it('Verifica se a senha está na regra e se são iguais', () => {
    expect(validateSenha('Pri1', 'Pri1')).toBe(true)
})

// a regra da senha é ter uma maiuscula, uma minuscula e um numero

it('Verifica a partir da data de nascimento se a pessoa é de maior', () => {
    expect(validateAge('Dec 25, 2010')).toBe(false)
})

it('Verifica se ambas funções estão certas', () => {
    expect(onSubmit('Pri1', 'Pri1','Dec 25, 2005')).toBe(true)
})