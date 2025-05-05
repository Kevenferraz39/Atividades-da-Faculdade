# Bibliotecas Essenciais do Python

Este documento apresenta as principais bibliotecas da linguagem Python utilizadas em diversas áreas, com explicações sobre seus propósitos e exemplos práticos de uso.

---

## 📊 Análise de Dados

### 1. **Pandas**

* **Uso**: Manipulação e análise de dados estruturados (tabelas, séries temporais).
* **Exemplo**:

```python
import pandas as pd

df = pd.DataFrame({"Nome": ["João", "Maria"], "Idade": [25, 30]})
print(df)
```

### 2. **NumPy**

* **Uso**: Cálculo numérico e operações com arrays multidimensionais.
* **Exemplo**:

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr.mean())
```

### 3. **Matplotlib**

* **Uso**: Visualização de dados em gráficos (linhas, barras, dispersão etc).
* **Exemplo**:

```python
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [4, 5, 6])
plt.title("Exemplo de Gráfico")
plt.show()
```

### 4. **Seaborn**

* **Uso**: Visualização estatística de dados com gráficos elegantes.
* **Exemplo**:

```python
import seaborn as sns
import pandas as pd

iris = sns.load_dataset("iris")
sns.boxplot(x="species", y="sepal_length", data=iris)
```

### 5. **Plotly**

* **Uso**: Visualizações interativas e em dashboards.
* **Exemplo**:

```python
import plotly.express as px

df = px.data.gapminder().query("year == 2007")
fig = px.scatter(df, x="gdpPercap", y="lifeExp", size="pop", color="continent")
fig.show()
```

---

## 🤖 Machine Learning & IA

### 6. **Scikit-learn**

* **Uso**: Algoritmos de machine learning, como regressão, classificação e clustering.
* **Exemplo**:

```python
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3]])
y = np.array([2, 4, 6])
model = LinearRegression().fit(X, y)
print(model.predict([[4]]))
```

### 7. **TensorFlow**

* **Uso**: Deep Learning (aprendizado profundo) com redes neurais artificiais.
* **Exemplo**:

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(units=1, input_shape=[1])
])
model.compile(optimizer='sgd', loss='mean_squared_error')
```

### 8. **PyTorch**

* **Uso**: Deep Learning com maior flexibilidade e controle.
* **Exemplo**:

```python
import torch

x = torch.tensor([1.0, 2.0, 3.0])
y = x ** 2
print(y)
```

---

## 🌐 Desenvolvimento Web

### 9. **Flask**

* **Uso**: Criação de APIs e aplicações web simples.
* **Exemplo**:

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Olá, Flask!"

app.run()
```

### 10. **Django**

* **Uso**: Desenvolvimento web completo com ORM, templates e rotas.
* **Exemplo**:

```bash
django-admin startproject meu_projeto
```

---

## 🧪 Ciência de Dados e Estatística

### 11. **SciPy**

* **Uso**: Funções estatísticas, álgebra linear e integrais.
* **Exemplo**:

```python
from scipy import stats
print(stats.norm.cdf(1.96))  # Probabilidade acumulada
```

### 12. **Statsmodels**

* **Uso**: Modelagem estatística (regressões, séries temporais).
* **Exemplo**:

```python
import statsmodels.api as sm

X = [1, 2, 3, 4]
y = [2, 4, 6, 8]
X = sm.add_constant(X)
model = sm.OLS(y, X).fit()
print(model.summary())
```

---

## 🛠️ Utilitários

### 13. **Requests**

* **Uso**: Requisições HTTP (GET, POST, etc.).
* **Exemplo**:

```python
import requests
response = requests.get("https://api.github.com")
print(response.json())
```

### 14. **BeautifulSoup**

* **Uso**: Web scraping e extração de dados de HTML.
* **Exemplo**:

```python
from bs4 import BeautifulSoup
import requests

html = requests.get("https://example.com").text
soup = BeautifulSoup(html, "html.parser")
print(soup.title.string)
```

### 15. **OS / Sys / Pathlib**

* **Uso**: Interação com sistema de arquivos e variáveis de ambiente.
* **Exemplo**:

```python
import os
print(os.getcwd())
```

---

## 🗃️ Banco de Dados

### 16. **SQLite3**

* **Uso**: Banco de dados relacional leve embutido no Python.
* **Exemplo**:

```python
import sqlite3
conn = sqlite3.connect("exemplo.db")
cursor = conn.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)")
```

### 17. **SQLAlchemy**

* **Uso**: ORM (Object-Relational Mapping) para banco de dados SQL.
* **Exemplo**:

```python
from sqlalchemy import create_engine
engine = create_engine('sqlite:///meubanco.db')
```

---

## 📦 Outros

### 18. **OpenCV**

* **Uso**: Processamento de imagem e visão computacional.
* **Exemplo**:

```python
import cv2
img = cv2.imread("imagem.jpg")
cv2.imshow("Imagem", img)
cv2.waitKey(0)
```

### 19. **PyPDF2**

* **Uso**: Leitura e manipulação de arquivos PDF.
* **Exemplo**:

```python
import PyPDF2
with open("arquivo.pdf", "rb") as file:
    reader = PyPDF2.PdfReader(file)
    print(reader.pages[0].extract_text())
```

### 20. **Datetime**

* **Uso**: Manipulação de datas e horas.
* **Exemplo**:

```python
from datetime import datetime
print(datetime.now())
```

---

## 🧠 Considerações Finais

Este documento cobre as bibliotecas mais usadas e didaticamente importantes na prática de desenvolvimento com Python. Cada biblioteca pode conter centenas de funcionalidades adicionais, por isso recomenda-se a leitura da documentação oficial para aprofundamento.

> **Dica**: Use `pip install <nome_da_biblioteca>` para instalar as bibliotecas que não estão presentes por padrão no Python.
