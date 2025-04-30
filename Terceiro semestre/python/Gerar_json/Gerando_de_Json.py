#Este codigo serve para gerar um json com dados de uma planilha que esteja na minha maquina
import pandas as pd

# Carregando o arquivo Excel
file_path = "C:/Users/kferraz/Downloads/Historico-Geral-ABS.xlsx"
xls = pd.ExcelFile(file_path)

# Listar os nomes das abas
sheet_names = xls.sheet_names
print(sheet_names)

# Corrigindo o nome da aba
df_historico = xls.parse('Historico-Gera')
df_historico.to_json("historico.json", orient="records", force_ascii=False, indent=4)
