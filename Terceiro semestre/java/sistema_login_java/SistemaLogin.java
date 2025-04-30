import java.io.*;
import java.util.*;

public class SistemaLogin {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        UsuarioService.carregarUsuarios();

        while (true) {
            System.out.println("1 - Cadastrar | 2 - Login | 3 - Recuperar Senha/Usuário");
            String opcao = scanner.nextLine();

            switch (opcao) {
                case "1":
                    cadastrar();
                    break;
                case "2":
                    login();
                    break;
                case "3":
                    recuperar();
                    break;
                default:
                    System.out.println("Opção inválida");
            }
        }
    }

    private static void cadastrar() throws IOException {
        Usuario u = coletarDados();
        if (UsuarioService.cadastrarUsuario(u)) {
            System.out.println("Cadastro realizado com sucesso.");
        } else {
            System.out.println("Usuário já cadastrado.");
        }
    }

    private static void login() throws IOException {
        System.out.print("Usuário: "); String user = scanner.nextLine();
        System.out.print("Senha: "); String senha = scanner.nextLine();

        Usuario u = UsuarioService.autenticar(user, senha);
        if (u != null) {
            System.out.println("Login bem-sucedido!");
            if (u.email.equals("kevenferraz39@gmail.com")) {
                painelAdmin();
            } else {
                painelUsuario(u);
            }
        } else {
            System.out.println("Usuário ou senha incorretos.");
        }
    }

    private static void recuperar() throws IOException {
        System.out.print("Digite o e-mail cadastrado: ");
        String email = scanner.nextLine();
        System.out.print("Nova senha (ou Enter para manter): ");
        String novaSenha = scanner.nextLine();
        System.out.print("Novo nome de usuário (ou Enter para manter): ");
        String novoUsuario = scanner.nextLine();

        if (UsuarioService.atualizarUsuario(email, novaSenha, novoUsuario)) {
            System.out.println("Dados atualizados.");
        } else {
            System.out.println("Usuário não encontrado.");
        }
    }

    private static Usuario coletarDados() {
        System.out.print("Email: "); String email = scanner.nextLine();
        System.out.print("Usuário: "); String usuario = scanner.nextLine();
        System.out.print("Senha: "); String senha = scanner.nextLine();
        System.out.print("Telefone: "); String telefone = scanner.nextLine();
        System.out.print("Idade: "); String idade = scanner.nextLine();
        System.out.print("Gênero: "); String genero = scanner.nextLine();
        System.out.print("Foto de perfil (URL): "); String foto = scanner.nextLine();
        return new Usuario(email, usuario, senha, telefone, idade, genero, foto);
    }

    private static void painelAdmin() throws IOException {
        while (true) {
            System.out.println("\n--- MENU ADMINISTRADOR ---");
            System.out.println("1 - Listar todos os usuários");
            System.out.println("2 - Adicionar novo usuário");
            System.out.println("3 - Editar usuário existente");
            System.out.println("4 - Excluir usuário");
            System.out.println("0 - Sair");
            String opcao = scanner.nextLine();

            switch (opcao) {
                case "1":
                    for (Usuario u : UsuarioService.listarUsuarios()) {
                        System.out.printf("Email: %s\nUsuário: %s\nTelefone: %s\nIdade: %s\nGênero: %s\nFoto: %s\n--------------------\n",
                            u.email, u.usuario, u.telefone, u.idade, u.genero, u.foto_de_perfil);
                    }
                    break;
                case "2":
                    cadastrar();
                    break;
                case "3":
                    recuperar();
                    break;
                case "4":
                    System.out.print("Digite o e-mail do usuário a excluir: ");
                    String emailDel = scanner.nextLine();
                    if (UsuarioService.excluirUsuario(emailDel)) {
                        System.out.println("Usuário excluído.");
                    } else {
                        System.out.println("Usuário não encontrado.");
                    }
                    break;
                case "0":
                    return;
                default:
                    System.out.println("Opção inválida.");
            }
        }
    }

    private static void painelUsuario(Usuario u) {
        System.out.println("\n--- MEUS DADOS ---");
        System.out.printf("Email: %s\nUsuário: %s\nTelefone: %s\nIdade: %s\nGênero: %s\nFoto: %s\n",
            u.email, u.usuario, u.telefone, u.idade, u.genero, u.foto_de_perfil);
    }
}
