# Operadores aritimeticos
x = 5
y = 3
z = 2
b = 4
soma = y * (x + b) ** z
"""-----------------------------|
|soma = y * x + 4 ** z == 3     |
|soma = y * (x + 4) ** z == 361 |
|_______________________________|
"""
print(f'A soma é: {soma}')
