'''
Criar credenciais de acesso ao Google Sheets
Acesse: Google Cloud Console

Crie um projeto.

Ative a Google Sheets API e a Google Drive API.

Vá em APIs e Serviços > Credenciais.

Clique em Criar credencial > Conta de serviço.

Após criada, clique nela e vá em Gerenciar chaves > Adicionar chave > JSON.

Salve o arquivo .json no seu projeto.

Compartilhe sua planilha com o e-mail da conta de serviço (algo como nome-do-servico@projeto.iam.gserviceaccount.com).
'''

import gspread
import pandas as pd
from oauth2client.service_account import ServiceAccountCredentials
import os

# Escopos necessários para acessar o Google Sheets
scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

# Caminho para o arquivo JSON com as credenciais da conta de serviço
credentials_path = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/codigopy.json"
credentials = ServiceAccountCredentials.from_json_keyfile_name(credentials_path, scopes)

# Autenticando
gc = gspread.authorize(credentials)

# URL ou ID da planilha

'''
sheet_url = "https://docs.google.com/spreadsheets/d/18gDwt_l3Osz3EKxNbJWOmJQYcre6L8Za5JH6VR3KrWg/edit?gid=0#gid=0"
'''

sheet_url = "https://docs.google.com/spreadsheets/d/18gDwt_l3Osz3EKxNbJWOmJQYcre6L8Za5JH6VR3KrWg/edit?gid=0#gid=0"


# Abrindo a planilha
spreadsheet = gc.open_by_url(sheet_url)

# Selecionando a aba (worksheet)

worksheet = spreadsheet.worksheet("Página1")  # certifique-se que esse é o nome correto

# Lendo os dados da planilha
data = worksheet.get_all_records()

# Convertendo para DataFrame
df = pd.DataFrame(data)

# Exibindo os dados como tabela
print("Visualização da tabela:")
print(df.head())

# Caminho para salvar o arquivo JSON
output_dir = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Banco_de_dados_json"

output_path = os.path.join(output_dir, "baseABS.json")

# Exportando para JSON
df.to_json(output_path, orient="records", force_ascii=False, indent=4)
print(f"Arquivo JSON exportado com sucesso em: {output_path}")
