print("Ola, Mundo!")

#recebendo dados em variaveis 
idade = 19

nome = "keven"

#recebendo dados em variaveis

#mostrar os dados das minhas variaveis

"""
PRIMEIRA MANEIRA DE EXBIR
_______________________________________________________
print("Olá, meu nome é " + nome + " e eu tenho " + str(idade) + " anos.")
_______________________________________________________
"""
"""
SEGUNDA MANEIRA DE EXBIR
_______________________________________________________
print("Olá, meu nome é {} e eu tenho {} anos.".format(nome, idade))
_______________________________________________________
"""

#TERCEIRA MANEIRA DE EXIBIR
print(f"Meu nome é {nome} e eu tenho {idade} anos")

peso = float (input(f"Quanto voce esta pesando agora {nome}? "))

StatusCivil = input(f"{nome}, qual o seu status civil agora? ")

print(f"{nome} entao voce pesa {peso}Kg e\natualmente esta {StatusCivil}")