from banco_dados import ler_usuarios, salvar_usuarios
from usuario import Usuario
from email_service import enviar_email_confirmacao

def cadastrar_usuario(novo_usuario):
    usuarios = ler_usuarios()
    if any(u["email"] == novo_usuario.email for u in usuarios):
        print("Usuário já cadastrado.")
        return False
    usuarios.append(novo_usuario.to_dict())
    salvar_usuarios(usuarios)
    enviar_email_confirmacao(novo_usuario.email)
    return True

def autenticar(usuario, senha):
    usuarios = ler_usuarios()
    for u in usuarios:
        if u["usuario"] == usuario and u["senha"] == senha:
            return u
    return None

def atualizar_usuario(email, nova_senha=None, novo_usuario=None):
    usuarios = ler_usuarios()
    for u in usuarios:
        if u["email"] == email:
            if nova_senha:
                u["senha"] = nova_senha
            if novo_usuario:
                u["usuario"] = novo_usuario
            salvar_usuarios(usuarios)
            return True
    return False

# NOVAS FUNÇÕES ADMINISTRATIVAS

def listar_todos_usuarios():
    return ler_usuarios()
 
def excluir_usuario(email):
    usuarios = ler_usuarios()
    novos_usuarios = [u for u in usuarios if u["email"] != email]
    if len(novos_usuarios) == len(usuarios):
        return False  # Nenhum usuário excluído (não encontrado)
    salvar_usuarios(novos_usuarios)
    return True
