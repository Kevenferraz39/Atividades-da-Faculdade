import json

# Caminho do arquivo
caminho_arquivo = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Banco_de_dados_json/MetasTargets2.json"

# 1. Lê o arquivo JSON
with open(caminho_arquivo, "r", encoding="utf-8") as f:
    banco = json.load(f)

# 2. Exibe os itens com índice
for i, item in enumerate(banco):
    print(f"{i}: {item['processo']} - {item['target']} - Meta: {item['meta']}")

# 3. Seleciona qual item alterar (ex: índice 1)
indice = int(input("Digite o número do item que deseja alterar: "))

# 4. Seleciona qual campo alterar (ex: meta)
campo = input("Digite o nome do campo que deseja alterar (ex: meta): ")

# 5. Novo valor
novo_valor = input("Digite o novo valor para esse campo: ")

# 6. Aplica a alteração
if campo in banco[indice]:
    banco[indice][campo] = novo_valor
    print("Alteração realizada com sucesso.")
else:
    print("Campo não encontrado.")

# 7. Salva o JSON alterado
with open(caminho_arquivo, "w", encoding="utf-8") as f:
    json.dump(banco, f, ensure_ascii=False, indent=2)

print("Arquivo salvo com as alterações.")
