import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd

# 1. Autenticação com Google Sheets via chave de serviço
scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

credentials_path = "C:/Users/kferraz/Documents/programacao/chave010908780.json"
credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_path, scopes)
gc = gspread.authorize(credentials)

# 2. Abertura da planilha e da aba "META"
sheet_url = "https://docs.google.com/spreadsheets/d/1-jXiT_cQgeyypdmRQQooTy2EHU0KG_LRIIExAPWFSU0/edit?gid=0#gid=0"
spreadsheet = gc.open_by_url(sheet_url)
worksheet = spreadsheet.worksheet("META")

# 3. Leitura e limpeza dos dados
data = worksheet.get_all_records()
df = pd.DataFrame(data)

# Limpeza e normalização dos dados
df["PROCESSO"] = df["PROCESSO"].astype(str).str.strip().str.upper()
df["TARGET"] = df["TARGET"].astype(str).str.strip().str.upper()
df["TURNO"] = df["TURNO"].astype(str).str.strip().str.upper()

# Verificação dos valores únicos para depuração
print("Turnos encontrados na planilha:", df["TURNO"].unique())

# 4. Função para gerar o CASE WHEN baseado no DataFrame
def gerar_case_when(df):
    case_lines = ["CASE"]
    for _, row in df.iterrows():
        processo = row["PROCESSO"]
        target = row["TARGET"]
        turno = row["TURNO"]
        meta = row["META"]

        # Formatação: colocar entre aspas se for string ou percentual
        if isinstance(meta, str) and not meta.replace(":", "").replace(",", "").replace(".", "").isdigit():
            meta_formatada = f"'{meta}'"
        else:
            meta_formatada = f"'{meta}'" if "%" in str(meta) else meta

        case_lines.append(
            f"  WHEN PROCESSO = '{processo}' AND TARGET = '{target}' AND TURNO = '{turno}' THEN {meta_formatada}"
        )

    case_lines.append("  ELSE NULL")
    case_lines.append("END")
    return "\n".join(case_lines)

# 5. Geração do CASE WHEN
case_when_sql = gerar_case_when(df)

# 6. Exibição
print(case_when_sql)
