import datetime

ano_de_nascimento = 2004

while True:
    hoje = datetime.date.today()
    if hoje.month == 2 and hoje.day == 16:
        idade = hoje.year - ano_de_nascimento
        print(f"Parabéns! Hoje é seu aniversário e você faz {idade} anos.")
        break
    else:
        print("Ainda não é o seu aniversário. Aguarde...")