import gspread
import pandas as pd
from google.oauth2.service_account import Credentials
import os
import sys

# Escopos de Acesso
scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# Caminho do JSON de credenciais
# Detecta o caminho do JSON na mesma pasta do script ou do .exe
base_path = getattr(sys, '_MEIPASS', os.path.dirname(os.path.abspath(__file__)))
credentials_path = os.path.join(base_path, "chave010908780.json")
credentials = Credentials.from_service_account_file(credentials_path, scopes=scopes)
gc = gspread.authorize(credentials)

# Abrindo a Planilha
sheet_url = "https://docs.google.com/spreadsheets/d/1-jXiT_cQgeyypdmRQQooTy2EHU0KG_LRIIExAPWFSU0/edit?gid=0#gid=0"
spreadsheet = gc.open_by_url(sheet_url)
worksheet = spreadsheet.worksheet("META")
data = worksheet.get_all_records()

# Convertendo para DataFrame
df = pd.DataFrame(data)
print("Visualização da tabela:")
print(df.head())

# Exportando para JSON
output_dir = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Banco_de_dados_json"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "MetasTargets.json")
df.to_json(output_path, orient="records", force_ascii=False, indent=4)
print(f"Arquivo JSON exportado com sucesso em: {output_path}")

#pyinstaller --onfile caminho do arquivo .py --add-data "caminho do arquivo json;." --onefile --windowed nome do arquivo .py