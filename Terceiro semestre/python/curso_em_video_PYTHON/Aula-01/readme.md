# Explicação do Código em Python

Este código Python é um simples programa interativo que solicita informações pessoais ao usuário e imprime uma saudação personalizada com os dados fornecidos. Vamos analisar o código passo a passo:

1. **Entrada do Nome:**
    ```python
    nome = input('Ola, qual o seu nome?')
    ```
   - O programa solicita ao usuário que insira seu nome.
   - A função `input` é utilizada para receber a entrada do usuário e armazenar o valor na variável `nome`.

2. **Impressão da Saudação com o Nome:**
    ```python
    print(f'Ola, {nome}')
    ```
   - A saudação é impressa na tela usando a função `print`.
   - A f-string é usada para incorporar o valor fornecido pelo usuário (armazenado em `nome`) na saudação.

3. **Entrada da Idade:**
    ```python
    idade = int(input(f'{nome} qual a sua idade ? '))
    ```
   - O programa pergunta ao usuário sobre sua idade.
   - A função `input` é utilizada novamente para receber a entrada do usuário.
   - A função `int` é usada para converter a entrada para um número inteiro, e o valor é armazenado na variável `idade`.

4. **Entrada do Peso:**
    ```python
    peso = float(input(f'Quanto você pesa ? '))
    ```
   - O programa pergunta ao usuário sobre seu peso.
   - A função `input` é utilizada para receber a entrada do usuário.
   - A função `float` é usada para converter a entrada para um número de ponto flutuante, e o valor é armazenado na variável `peso`.

5. **Impressão dos Dados Fornecidos:**
    ```python
    print(f'{nome} você tem:\n{idade} Anos\n{peso} Kg')
    ```
   - O programa imprime na tela os dados fornecidos pelo usuário.
   - A f-string é usada para formatar a saída, incluindo o nome, idade e peso na mensagem impressa.
   - O caractere de escape `\n` é utilizado para criar quebras de linha, exibindo cada informação em uma nova linha.

Este código é uma aplicação simples de entrada e saída em Python, interagindo com o usuário para coletar e exibir informações pessoais.