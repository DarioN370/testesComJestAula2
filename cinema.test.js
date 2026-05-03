//VAMOS USAR O DESCRIBE
// AQUI NAO TEM REGRA DE NECOCIOS, É APENAS TESTE
// AQUI É ONDE EU VOU COLOCAR OS TESTES, testar valores errados e certos ali nas arrow functions
const calcularIngresso = require('./cinema')

describe('Suíte de testes: Cálculo de ingressos do cinema', ()=>{
    //Nossos testes entrarão aqui! Vamos usar IT, para a leitura parecer uma frase, ele faz a mesma coisa que o TEST

    //CRIANCA
    it('Deve retornar a entrada gratuita (0) para crianças até 5 anos', ()=>{
        expect(calcularIngresso(4,false)).toBe(0)
    })
    //IDOSO
    it('Deve cobrar R$20,00 para idosos com 65 anos ou mais', ()=>{
        expect(calcularIngresso(65,false)).toBe(20)
    })
    //MEIA ENTRADA
    it('Deve cobrar meia entrada (25) para estudantes', ()=>{
        expect(calcularIngresso(20,true)).toBe(25)
    })
     //PREÇO INTEGRAL DO INGRESSO
    it('Deve cobrar o valor inteiro (50) para clientes comuns', ()=>{
        expect(calcularIngresso(30,false)).toBe(50)
    })
})