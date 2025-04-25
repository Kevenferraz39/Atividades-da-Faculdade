# Solicita o valor ao usuário
numero = int(input("\nEu quero a tabuada do : "))

# Loop para calcular e exibir a tabuada
print(f"\nTabuada do {numero}:")
for i in range(1, 11):
    resultado = numero * i

    print(f"{numero} x {i} = {resultado}")
   