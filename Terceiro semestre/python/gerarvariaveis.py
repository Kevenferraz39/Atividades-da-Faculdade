import gspread 
import pandas as pd
from oauth2client.service_account import ServiceAccountCredentials
import os

# Defina os escopos necessários para acessar o Google Sheets
scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# Caminho para a chave do serviço JSON
credentials_path = "C:/Users/kferraz/Documents/programacao/chave010908780.json"

# Autenticação usando a chave do serviço
credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_path, scopes)
gc = gspread.authorize(credentials)

# URL ou ID da planilha
sheet_url = "https://docs.google.com/spreadsheets/d/1-jXiT_cQgeyypdmRQQooTy2EHU0KG_LRIIExAPWFSU0/edit?gid=0#gid=0"

# Acesse a planilha pelo URL
spreadsheet = gc.open_by_url(sheet_url)

# Abra a aba (sheet) chamada 'META'
worksheet = spreadsheet.worksheet("META")

# Obtenha todos os registros da aba como uma lista de dicionários
data = worksheet.get_all_records()

# Converta para um DataFrame do Pandas
df = pd.DataFrame(data)

# Transformar todos os dados para lowercase
df = df.applymap(lambda x: x.lower() if isinstance(x, str) else x)

# Visualizar as primeiras linhas para verificar a estrutura da tabela
print("Visualização da tabela:")
print(df.head())

output_dir = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Banco_de_dados_json"
output_path = os.path.join(output_dir, "MetasTargets2.json")

# Verificar se o diretório de saída existe, se não, criar
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Exportando para JSON
df.to_json(output_path, orient="records", force_ascii=False, indent=4)
print(f"Arquivo JSON exportado com sucesso em: {output_path}")
