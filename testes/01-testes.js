/**
 * describe - agrupador de testes
 * it - apresentação do teste
 */

import assert from 'node:assert'
import { exibirNomeFormatado } from '../Conceitos/testes-unidade.js'


describe('Testes de Projeto', () => {
    it('Teste para saber se o nome do Dog vai voltar tudo maiúsculo', () => {
        assert.strictEqual(exibirNomeFormatado('Mimosa'), 'MIMOSA')
    })
     it('Primeiro Teste', () => {
    })
    it('Segundo Teste', () => {
        throw new Error()


    })

})