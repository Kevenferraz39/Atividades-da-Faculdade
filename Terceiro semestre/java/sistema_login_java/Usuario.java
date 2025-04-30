public class Usuario {
    public String email;
    public String usuario;
    public String senha;
    public String telefone;
    public String idade;
    public String genero;
    public String foto_de_perfil;

    public Usuario() {}

    public Usuario(String email, String usuario, String senha, String telefone, String idade, String genero, String foto) {
        this.email = email;
        this.usuario = usuario;
        this.senha = senha;
        this.telefone = telefone;
        this.idade = idade;
        this.genero = genero;
        this.foto_de_perfil = foto;
    }
}