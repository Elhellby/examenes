import {
    multipleThree,
    primeNumber
} from '../utils/Process'

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

describe('Procesos multiplo de 3 y numeros primos', () => {
    describe('Comprobando multiplos de 3', () => {
        test('usando el numero N=2', () => {
            const result = multipleThree(2)
            expect(result).toEqual([])
        })

        test('usando el numero N=3', () => {
            const result = multipleThree(3)
            expect(result).toEqual([3])
        })

        test('usando el numero N=5', () => {
            const result = multipleThree(5)
            expect(result).toEqual([3])
        })

        test('usando el numero N=7', () => {
            const result = multipleThree(7)
            expect(result).toEqual([3, 6])
        })

        test('usando el numero N=11', () => {
            const result = multipleThree(11)
            expect(result).toEqual([3,6,9])
        })
    })

    describe('Comprobando numeros primos', () => {
        test('usando el numero N=2', () => {
            const result = primeNumber(2)
            expect(result).toEqual([2])
        })

        test('usando el numero N=3', () => {
            const result = primeNumber(3)
            expect(result).toEqual([2,3])
        })

        test('usando el numero N=5', () => {
            const result = primeNumber(5)
            expect(result).toEqual([2,3,5])
        })

        test('usando el numero N=7', () => {
            const result = primeNumber(7)
            expect(result).toEqual([2,3,5,7])
        })

        test('usando el numero N=11', () => {
            const result = primeNumber(11)
            expect(result).toEqual([2,3,5,7,11])
        })
    })
})