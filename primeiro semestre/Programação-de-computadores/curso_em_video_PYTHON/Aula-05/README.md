# Operadores Aritméticos

Este código realiza operações aritméticas básicas entre dois números inseridos pelo usuário.

## Código
```python
# Operadores aritméticos
n1 = int(input('Digite um número: '))
n2 = int(input('Digite outro número: '))

soma = n1 + n2
mult = n1 * n2
div = n1 / n2
divI = n1 // n2
expo = n1 ** n2

print('\nA soma é {};\nO produto é {};\nA divisão é {: .2f};'.format(soma, mult, div))
print('Divisão inteira é {};\nA potência é {};'.format(divI, expo))
```

## Explicação

1. `n1 = int(input('Digite um número: '))` e `n2 = int(input('Digite outro número: '))`: Solicitam ao usuário a inserção de dois números e convertem esses valores para inteiros.

2. `soma = n1 + n2`: Calcula a soma dos dois números.

3. `mult = n1 * n2`: Calcula o produto dos dois números.

4. `div = n1 / n2`: Calcula a divisão dos dois números.

5. `divI = n1 // n2`: Calcula a divisão inteira dos dois números.

6. `expo = n1 ** n2`: Calcula a potência de `n1` elevado a `n2`.

7. A última parte do código utiliza `print` para exibir os resultados formatados na tela. O formato `{:.2f}` na string de formatação é usado para apresentar a divisão com duas casas decimais.

   - `print('\nA soma é {};\nO produto é {};\nA divisão é {: .2f};'.format(soma, mult, div))`: Exibe a soma, o produto e a divisão dos números.

   - `print('Divisão inteira é {};\nA potência é {};'.format(divI, expo))`: Exibe a divisão inteira e a potência dos números.
