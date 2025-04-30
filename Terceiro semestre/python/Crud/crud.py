import json
import sys
import os

# Caminho do arquivo
caminho_arquivo = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Banco_de_dados_json/MetasTargets2.json"

# 1. Carregar o banco de dados JSON
with open(caminho_arquivo, "r", encoding="utf-8") as f:
    banco = json.load(f)

# 2. Exibir os registros
print("\n📄 REGISTROS ATUAIS:")
for i, item in enumerate(banco):
    print(f"{i}: processo: {item['processo']} | target: {item['target']} | meta: {item['meta']} | turno: {item['turno']}")

# 3. Menu principal
print("\n🔧 O que você deseja fazer?\n")
print("0 - ❌ Cancelar e sair")
print("1 - ✏️ Editar um campo específico de um item")
print("2 - 📥 Adicionar novo campo a um item específico")
print("3 - 📝 Adicionar novo campo a TODOS os itens")
print("4 - 📤 DELETAR campo, item ou tudo\n")
print("--------------------------------------------\n")

acao = input("Digite o número da ação desejada: ")

# 4. Cancelar execução
if acao == "0":
    # Limpar terminal
    os.system("cls" if os.name == "nt" else "clear")
    print("🚫 Execução cancelada pelo usuário.")
    sys.exit()

# 5. Ações
if acao == "1":
    indice = int(input("Digite o índice do item a ser alterado: "))
    campo = input("Digite o nome do campo que deseja alterar: ")
    if campo in banco[indice]:
        novo_valor = input("Digite o novo valor para esse campo: ")
        banco[indice][campo] = novo_valor
        print("✅ Campo alterado com sucesso.")
    else:
        print("❌ Campo não encontrado no item.")

elif acao == "2":
    indice = int(input("Digite o índice do item onde deseja adicionar o campo: "))
    novo_campo = input("Nome do novo campo: ")
    novo_valor = input("Valor do novo campo: ")
    banco[indice][novo_campo] = novo_valor
    print("✅ Campo adicionado ao item.")

elif acao == "3":
    novo_campo = input("Nome do novo campo: ")
    novo_valor = input("Valor do novo campo: ")
    for item in banco:
        item[novo_campo] = novo_valor
    print("✅ Campo adicionado a todos os itens.")

elif acao == "4":
    print("\n🗑️ O que deseja deletar?")
    print("1 - Um campo específico de um item")
    print("2 - Um item completo")
    print("3 - Um campo de TODOS os itens")
    print("4 - TODOS os dados (limpar banco)")

    subacao = input("Escolha a subação: ")

    if subacao == "1":
        indice = int(input("Digite o índice do item: "))
        campo = input("Nome do campo a ser removido: ")
        if campo in banco[indice]:
            del banco[indice][campo]
            print("✅ Campo removido do item.")
        else:
            print("❌ Campo não encontrado.")

    elif subacao == "2":
        indice = int(input("Digite o índice do item a ser deletado: "))
        confirm = input(f"Tem certeza que deseja deletar o item {indice}? (s/n): ")
        if confirm.lower() == "s":
            banco.pop(indice)
            print("✅ Item removido.")
        else:
            print("❌ Ação cancelada.")

    elif subacao == "3":
        campo = input("Nome do campo a ser removido de todos os itens: ")
        for item in banco:
            if campo in item:
                del item[campo]
        print("✅ Campo removido de todos os itens.")

    elif subacao == "4":
        confirm = input("Tem certeza que deseja apagar TODOS os registros? (s/n): ")
        if confirm.lower() == "s":
            banco = []
            print("✅ Todos os dados foram removidos.")
        else:
            print("❌ Ação cancelada.")
    else:
        print("❌ Subação inválida.")

else:
    print("❌ Ação inválida.")

# 6. Salvar alterações no JSON
with open(caminho_arquivo, "w", encoding="utf-8") as f:
    json.dump(banco, f, ensure_ascii=False, indent=2)

print("💾 Alterações salvas com sucesso.")
