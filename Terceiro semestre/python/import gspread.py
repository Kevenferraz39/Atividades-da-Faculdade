import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import os

# 1. Autenticação com Google Sheets
scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

credentials_path = "C:/Users/kferraz/Documents/programacao/chave010908780.json"
credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_path, scopes)
gc = gspread.authorize(credentials)

# 2. Abertura da planilha e aba "META"
sheet_url = "https://docs.google.com/spreadsheets/d/1-jXiT_cQgeyypdmRQQooTy2EHU0KG_LRIIExAPWFSU0/edit?gid=0#gid=0"
spreadsheet = gc.open_by_url(sheet_url)
worksheet = spreadsheet.worksheet("META")

# 3. Leitura e limpeza dos dados
data = worksheet.get_all_records()
df = pd.DataFrame(data)

df["PROCESSO"] = df["PROCESSO"].astype(str).str.strip().str.upper()
df["TARGET"] = df["TARGET"].astype(str).str.strip().str.upper()
df["TURNO"] = df["TURNO"].astype(str).str.strip().str.upper()
df["META"] = df["META"].astype(str).str.strip()

# 4. Função para gerar o CASE WHEN
def gerar_case_when(df):
    case_lines = ["CASE"]
    for _, row in df.iterrows():
        processo = row["PROCESSO"]
        target = row["TARGET"]
        turno = row["TURNO"]
        meta = row["META"]

        # Tudo entre aspas simples
        case_lines.append(
            f"  WHEN PROCESSO = '{processo}' AND TARGET = '{target}' AND TURNO = '{turno}' THEN '{meta}'"
        )

    case_lines.append("  ELSE NULL")
    case_lines.append("END")
    return "\n".join(case_lines)

# 5. Geração do CASE WHEN
case_when_sql = gerar_case_when(df)

# 6. Exibição
print(case_when_sql)

# 7. Caminho para salvar o arquivo SQL
output_dir = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/SQL"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "Casewhen.sql")

# 8. Exportando o conteúdo para um arquivo .sql
with open(output_path, "w", encoding="utf-8") as f:
    f.write(case_when_sql)

print(f"Arquivo SQL exportado com sucesso em: {output_path}")