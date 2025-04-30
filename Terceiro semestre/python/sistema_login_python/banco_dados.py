import json
import os

CAMINHO_BANCO = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Banco_de_dados_json/banco/BancoUsuarios.json"

def ler_usuarios():
    if not os.path.exists(CAMINHO_BANCO):
        return []
    with open(CAMINHO_BANCO, 'r', encoding='utf-8') as f:
        return json.load(f)

def salvar_usuarios(usuarios):
    with open(CAMINHO_BANCO, 'w', encoding='utf-8') as f:
        json.dump(usuarios, f, indent=4, ensure_ascii=False)
