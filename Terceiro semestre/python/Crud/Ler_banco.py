import json

# Caminho do arquivo
caminho_arquivo = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Banco_de_dados_json/MetasTargets2.json"

# 1. Lê o arquivo JSON
with open(caminho_arquivo, "r", encoding="utf-8") as f:
    banco = json.load(f)

# 2. Exibe os itens com índice
for i, item in enumerate(banco):
    print(f"{i}: {item['processo']} - {item['target']} - Meta: {item['meta']}")