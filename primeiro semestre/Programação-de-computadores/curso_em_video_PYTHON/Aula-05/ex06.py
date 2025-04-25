# Operadores aritimeticos
n1 = int(input('Digite um número: '))
n2 = int(input('Digite outro número: '))

soma = n1 + n2
mult = n1 * n2
div = n1 / n2
divI = n1 // n2
expo = n1 ** n2

print('\nA soma é {};\nO produto é {};\nA divisão é {: .2f};'.format(soma, mult, div))
print('Divisao inteira é {};\nA potência é {};'.format(divI, expo))
