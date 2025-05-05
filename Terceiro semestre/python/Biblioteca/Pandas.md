
# Biblioteca Pandas do Python

A biblioteca **Pandas** é uma das ferramentas mais importantes para análise e manipulação de dados no Python. Ela fornece estruturas de dados poderosas e funcionalidades para trabalhar com dados tabulares (semelhantes a planilhas ou tabelas SQL).

---

## 📦 O que o Pandas tem: Estruturas principais

### 1. `Series`
- Estrutura unidimensional (como uma coluna de planilha).
- Possui rótulos (índices) que facilitam o acesso aos dados.

```python
import pandas as pd
pd.Series([10, 20, 30], index=['a', 'b', 'c'])
```

### 2. `DataFrame`
- Estrutura bidimensional (semelhante a uma tabela).
- Colunas podem ter tipos diferentes.

```python
data = {'nome': ['Ana', 'Bruno'], 'idade': [25, 30]}
df = pd.DataFrame(data)
```

### 3. `Index`
- Define os rótulos das linhas ou colunas.
- Auxilia no acesso e alinhamento dos dados.

---

## 🔧 O que o Pandas faz: Funcionalidades principais

### 1. Leitura e escrita de dados
- Leitura de arquivos CSV, Excel, JSON, SQL, Parquet etc.

```python
df = pd.read_csv('dados.csv')
```

### 2. Seleção e filtragem de dados

```python
df[df['idade'] > 30]
```

### 3. Limpeza e tratamento de dados

```python
df.dropna()       # Remove valores nulos
df.fillna(0)      # Substitui nulos por 0
df.replace('?', None)  # Substitui valores
```

### 4. Manipulação de colunas e linhas
- Criar, renomear, excluir e reorganizar colunas.

### 5. Operações estatísticas e matemáticas

```python
df['salario'].mean()
df.describe()
```

### 6. Junções e combinações (`merge`, `join`, `concat`)

```python
pd.merge(df1, df2, on='id')
```

### 7. Análise temporal (séries temporais)

```python
df['data'] = pd.to_datetime(df['data'])
df.resample('M').sum()
```

### 8. Exportação de dados

```python
df.to_csv('saida.csv')
```

---

## ✅ Resumo didático

| Recurso               | Descrição rápida                                |
|----------------------|--------------------------------------------------|
| `Series`             | Lista com rótulos (índice)                       |
| `DataFrame`          | Tabela com linhas e colunas                      |
| Leitura de arquivos  | Importar dados de arquivos variados              |
| Filtros e seleção    | Trabalhar com subconjuntos de dados              |
| Agrupamento (`groupby`) | Resumir dados por categoria                 |
| Limpeza              | Tratar nulos, duplicados, valores inválidos      |
| Estatísticas         | Calcular médias, somas, etc.                     |
| Junções (`merge`)    | Juntar dados como em bancos relacionais          |
| Séries temporais     | Manipular datas e frequências                    |
| Exportação           | Salvar dados processados                         |
