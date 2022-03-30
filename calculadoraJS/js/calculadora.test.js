import { soma, subtracao, multiplicacao, divisao } from './calculadora'

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