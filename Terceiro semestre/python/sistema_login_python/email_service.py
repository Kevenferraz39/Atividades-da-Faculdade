import smtplib
from email.mime.text import MIMEText
 
def enviar_email_confirmacao(destinatario):
    remetente = "seuemail@gmail.com"
    senha = "sua_senha_de_app"

    msg = MIMEText("Seu cadastro foi realizado com sucesso.")
    msg['Subject'] = "Confirmação de Cadastro"
    msg['From'] = remetente
    msg['To'] = destinatario

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login(remetente, senha)
            smtp.send_message(msg)
        print(f"E-mail enviado para {destinatario}")
    except Exception as e:
        print(f"Erro ao enviar e-mail: {e}")
