i = float(input("Quantos metros?  "))
c = i * 100  # Convertendo para centímetros
mm = i * 1000  # Convertendo para milímetros

# Verificando a condição
if i > 1:
    print(f'\n{i} metros tem {c} Centímetros\n{i} Metros tem {mm} Milímetros')
else:
    print(f'\n{i} metro tem {c} Centímetros\n{i} Metro tem {mm} Milímetros')
