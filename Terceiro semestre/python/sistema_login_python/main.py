import os
from usuario import Usuario
from usuario_service import (
    cadastrar_usuario,
    autenticar,
    atualizar_usuario,
    listar_todos_usuarios,
    excluir_usuario
)

def menu():
    print("1 - Cadastrar | 2 - Login | 3 - Recuperar Senha/Usuário")
    return input("Escolha a opção: ")

def menu_admin():
    print("\n--- MENU ADMINISTRADOR ---")
    print("1 - Listar todos os usuários")
    print("2 - Adicionar novo usuário")
    print("3 - Editar usuário existente")
    print("4 - Excluir usuário")
    print("0 - Sair")
    return input("Escolha a opção: ")

def coletar_dados_usuario():
    email = input("Email: ")
    usuario = input("Usuário: ")
    senha = input("Senha: ")
    telefone = input("Telefone: ")
    idade = input("Idade: ")
    genero = input("Gênero: ")
    foto = input("URL da Foto de Perfil: ")
    return Usuario(email, usuario, senha, telefone, idade, genero, foto)

def painel_admin():
    while True:
        opcao = menu_admin()
        if opcao == "1":
            usuarios = listar_todos_usuarios()
            print("\n--- USUÁRIOS CADASTRADOS ---")
            for u in usuarios:
                print(f"""
Email: {u.get('email')}
Usuário: {u.get('usuario')}
Telefone: {u.get('telefone')}
Idade: {u.get('idade')}
Gênero: {u.get('genero')}
Foto de Perfil: {u.get('foto_de_perfil')}
------------------------------
""")
        elif opcao == "2":
            novo = coletar_dados_usuario()
            if cadastrar_usuario(novo):
                print("Usuário adicionado com sucesso.")
        elif opcao == "3":
            email = input("E-mail do usuário a editar: ")
            nova_senha = input("Nova senha (ou Enter para manter): ")
            novo_usuario = input("Novo nome de usuário (ou Enter para manter): ")
            if atualizar_usuario(email, nova_senha or None, novo_usuario or None):
                print("Usuário atualizado.")
            else:
                print("Usuário não encontrado.")
        elif opcao == "4":
            email = input("E-mail do usuário a excluir: ")
            if excluir_usuario(email):
                print("Usuário excluído.")
            else:
                print("Usuário não encontrado.")
        elif opcao == "0":
            os.system("cls" if os.name == "nt" else "clear")
            print("Até mais 🙋‍♂️")
            break
        else:
            print("Opção inválida.")

def painel_usuario(usuario):
    print(f"\nBem-vindo, {usuario['usuario']}!")
    print("Seus dados:")
    for k, v in usuario.items():
        print(f"{k.capitalize()}: {v}")

def main():
    opcao = menu()

    if opcao == "1":
        u = coletar_dados_usuario()
        if cadastrar_usuario(u):
            print("Cadastro realizado com sucesso.")
    elif opcao == "2":
        usuario = input("Usuário: ")
        senha = input("Senha: ")
        resultado = autenticar(usuario, senha)
        if resultado:
            print("Login bem-sucedido!")
            if resultado['email'] == "kevenferraz39@gmail.com":
                painel_admin()
            else:
                painel_usuario(resultado)
        else:
            print("Usuário ou senha incorretos.")
    elif opcao == "3":
        email = input("Digite o e-mail cadastrado: ")
        nova_senha = input("Nova senha (ou Enter para manter): ")
        novo_usuario = input("Novo nome de usuário (ou Enter para manter): ")
        if atualizar_usuario(email, nova_senha or None, novo_usuario or None):
            print("Dados atualizados.")
        else:
            print("Usuário não encontrado.")

if __name__ == "__main__":
    main()