import { soma, subtracao, multiplicacao, divisao, bhaskara } from './calculadora'

it('Soma', () => {
    expect(soma(2,4)).toBe(6)
})

it('Subtração', () => {
    expect(subtracao(10,3)).toBe(7)
})

it('Multiplicação', () => {
    expect(multiplicacao(2,5)).toBe(10)
})

it('Divisão', () => {
    expect(divisao(9,3)).toBe(3)
})

it('Bhaskara', () => {
    expect(bhaskara(2,12,-14)).toMatchObject({"x1": 1, "x2": -7})
})

it('Bhaskara 2', () => {
    expect(bhaskara(0,8,-24)).toMatchObject({"x1": NaN, "x2": -Infinity})
})

it('Bhaskara 3', () => {
    expect(bhaskara(0, 0, -24)).toMatchObject({"x1": "NaN", "x2": "NaN"})
})