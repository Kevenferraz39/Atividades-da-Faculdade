# Importar as bibliotecas necessárias
from PIL import Image, ImageOps

# Caminho da imagem original (substitua pelo seu caminho local ou ajuste conforme necessário)
original_image_path = 'C:/Users/kferraz/Pictures/Screenshots/foto_bia.png'

# Abrir a imagem
image = Image.open(original_image_path)

# Converter a imagem para RGB, caso ela tenha canal alfa (transparência)
# Isso é necessário porque o formato JPEG não aceita imagens RGBA (com transparência)
if image.mode == 'RGBA':
    image = image.convert("RGB")

# Definir o tamanho alvo (resolução desejada para o wallpaper)
target_size = (1920, 1200)  # (largura, altura)

# Ajustar a imagem para o tamanho alvo
# ImageOps.fit mantém a proporção da imagem e faz o crop centralizado
# A opção centering=(0.5, 0.4) ajusta ligeiramente o foco para cima (área dos olhos)
fitted_image = ImageOps.fit(
    image,
    target_size,
    method=Image.Resampling.LANCZOS,  # Algoritmo de alta qualidade para redimensionamento
    centering=(0.5, 0.4)  # (horizontal, vertical) - 0.5 é centralizado
)

# Caminho de saída da imagem final
output_path = 'C:/Users/kferraz/Pictures/foto_bia.png'

# Salvar a imagem ajustada em alta qualidade
fitted_image.save(output_path, format='JPEG', quality=95)

# Exibir o caminho do arquivo gerado
print(f"Wallpaper salvo em: {output_path}")
