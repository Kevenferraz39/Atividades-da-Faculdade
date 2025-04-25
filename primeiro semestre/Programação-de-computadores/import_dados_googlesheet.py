#Passo 2: Instalar Dependências
#No terminal, execute os comandos abaixo para instalar as bibliotecas necessárias:
#pip install gspread pandas

import gspread # type: ignore
import pandas as pd # type: ignore
from oauth2client.service_account import ServiceAccountCredentials # type: ignore

# Configurar escopos para acesso ao Google Sheets
SCOPES = ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"]

# Caminho para o arquivo JSON da chave de serviço
SERVICE_ACCOUNT_FILE = "caminho/para/seu/arquivo.json"

# Autenticação
credentials = ServiceAccountCredentials.from_json_keyfile_name(SERVICE_ACCOUNT_FILE, SCOPES)
client = gspread.authorize(credentials)

# URL da planilha
spreadsheet_url = "https://docs.google.com/spreadsheets/d/1PKXgHBBGB8Fte6PDwL0UabyM-KWNSRl9hDH4nUG7vVk/edit?pli=1&gid=1716330258"

# Acessar a planilha pelo URL
spreadsheet = client.open_by_url(spreadsheet_url)

# Selecionar a aba pelo índice (0 para a primeira aba)
sheet = spreadsheet.get_worksheet(0)

# Obter todos os dados da aba
data = sheet.get_all_records()

# Converter os dados em um DataFrame do pandas
df = pd.DataFrame(data)

# Exibir o DataFrame
print(df)
