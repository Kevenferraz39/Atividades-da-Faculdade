n = int(input('Digite um numero: '))

dobro = n * 2
triplo = n * 3
raiz = n ** (1/2) # nao consegui fazer sozinho

print(f'\nO dobro de {n} é: {dobro}\nO triplo de {n} é: {triplo}\nA Raiz quadrada de {n} é: {raiz:.2f}')

print('A raiz quadrada tambem pde ser calculada assim {:.2f}'.format(pow(n, (1/2))))