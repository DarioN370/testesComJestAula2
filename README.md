# Aula 02: Testes Unitários com Jest 🧪

Este repositório contém os exercícios práticos da segunda aula de **Jest**, focada na organização de suítes de testes e validação de regras de negócio para um sistema de ingressos de cinema.

---

## 📌 Sobre o Projeto

O objetivo desta aula foi exercitar a escrita de testes unitários utilizando as funções `describe` e `it`, garantindo que a suíte de testes seja organizada e de fácil leitura.

### 🎟️ Regras de Preço (Lógica de Negócio)

A função `calcularIngresso` valida as seguintes condições:

* **Crianças (até 5 anos):** Entrada gratuita (R$ 0).
* **Idosos (65 anos ou mais):** Valor fixo de R$ 20,00.
* **Estudantes:** Meia-entrada no valor de R$ 25,00.
* **Público Geral:** Valor integral de R$ 50,00.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (Node.js)**
* **Jest** (Framework de Testes)

---

## 🚀 Como Executar o Projeto

1.  **Inicie o ambiente Node (caso ainda não possua o package.json):**
    ```bash
    npm init -y
    ```

2.  **Instale o Jest como dependência de desenvolvimento:**
    ```bash
    npm install --save-dev jest
    ```

3.  **Configure o script de teste no seu `package.json`:**
    ```json
    "scripts": {
      "test": "jest"
    }
    ```

4.  **Execute os testes no terminal:**
    ```bash
    npm test
    ```

---

## 🧪 Estrutura da Suíte de Testes

Os testes foram organizados dentro de um bloco `describe` para agrupar as validações da função de cálculo. Utilizamos o método `it` para que a descrição do teste se assemelhe a uma frase explicativa.

**Exemplo de implementação:**

```javascript
// Localizado em cinema.test.js
describe('Suíte de testes: Cálculo de ingressos do cinema', () => {
    it('Deve retornar a entrada gratuita (0) para crianças até 5 anos', () => {
        expect(calcularIngresso(4, false)).toBe(0);
    });
});