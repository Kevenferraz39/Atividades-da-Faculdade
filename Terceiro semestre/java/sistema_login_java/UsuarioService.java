import java.io.*;
import java.util.*;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class UsuarioService {
    private static final String CAMINHO_BANCO = "c:/Users/kferraz/Documents/GitHub/Atividades-da-Faculdade/Terceiro semestre/Banco_de_dados_json/banco/BancoUsuarios2.json";
    private static List<Usuario> usuarios = new ArrayList<>();
    private static final ObjectMapper mapper = new ObjectMapper();

    public static void carregarUsuarios() throws IOException {
        File arquivo = new File(CAMINHO_BANCO);
        if (arquivo.exists()) {
            usuarios = mapper.readValue(arquivo, new TypeReference<List<Usuario>>(){});
        }
    }

    public static void salvarUsuarios() throws IOException {
        mapper.writerWithDefaultPrettyPrinter().writeValue(new File(CAMINHO_BANCO), usuarios);
    }

    public static List<Usuario> listarUsuarios() {
        return usuarios;
    }

    public static boolean cadastrarUsuario(Usuario novo) throws IOException {
        for (Usuario u : usuarios) {
            if (u.email.equals(novo.email)) {
                return false;
            }
        }
        usuarios.add(novo);
        salvarUsuarios();
        return true;
    }

    public static Usuario autenticar(String usuario, String senha) {
        for (Usuario u : usuarios) {
            if (u.usuario.equals(usuario) && u.senha.equals(senha)) {
                return u;
            }
        }
        return null;
    }

    public static boolean atualizarUsuario(String email, String novaSenha, String novoUsuario) throws IOException {
        for (Usuario u : usuarios) {
            if (u.email.equals(email)) {
                if (novaSenha != null && !novaSenha.isEmpty()) u.senha = novaSenha;
                if (novoUsuario != null && !novoUsuario.isEmpty()) u.usuario = novoUsuario;
                salvarUsuarios();
                return true;
            }
        }
        return false;
    }

    public static boolean excluirUsuario(String email) throws IOException {
        boolean removido = usuarios.removeIf(u -> u.email.equals(email));
        if (removido) salvarUsuarios();
        return removido;
    }
}
