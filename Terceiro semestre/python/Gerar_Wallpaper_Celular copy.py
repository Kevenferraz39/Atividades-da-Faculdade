from PIL import Image, ImageOps

# Abrir a imagem original
original_image_path = '/mnt/data/C2661E23-5EA1-4408-872B-5DBB0DB14ECC.jpeg'
image = Image.open(original_image_path)

# Definir a resolução do iPhone 13
target_size = (1170, 2532)  # (largura, altura)

# Ajustar a imagem: primeiro colocar o foco no centro
# Ajustar o aspect ratio usando "fit" para não distorcer
fitted_image = ImageOps.fit(image, target_size, method=Image.LANCZOS, centering=(0.5, 0.4))  # leve ajuste vertical para os olhos

# Salvar a nova imagem
output_path = '/mnt/data/wallpaper_iphone13.jpg'
fitted_image.save(output_path, quality=95)

output_path
