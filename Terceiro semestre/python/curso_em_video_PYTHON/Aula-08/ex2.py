import random
recebenum = input("digite um numero: ")
num = random.randint(1, 10)

if recebenum==num:
    print(f"Voce acertou: {num}")
else: 
    print(f"voce errou: {num}")
