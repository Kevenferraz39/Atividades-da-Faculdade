from PIL import Image, ImageOps

# Abrir a imagem original
original_image_path = 'C:/Users/kferraz/Pictures/Screenshots/diego.png'
image = Image.open(original_image_path)

# Definir a resolução do iPhone 13
target_size = (1170, 2532)  # (largura, altura)

# Ajustar a imagem: primeiro colocar o foco no centro
# Ajustar o aspect ratio usando "fit" para não distorcer
fitted_image = ImageOps.fit(image, target_size, method=Image.LANCZOS, centering=(0.5, 0.4))  # leve ajuste vertical para os olhos

# Salvar a nova imagem
output_path = 'C:/Users/kferraz/Pictures/Logo/wallpaper_diego.png'
fitted_image.save(output_path, quality=95)

output_path
