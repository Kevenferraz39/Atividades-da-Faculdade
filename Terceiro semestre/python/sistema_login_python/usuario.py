class Usuario:
    def __init__(self,email,usuario,senha,telefone,idade,genero,foto_de_perfil):
        self.email = email
        self.usuario = usuario
        self.senha = senha
        self.telefone = telefone
        self.idade = idade
        self.genero = genero
        self.foto_de_perfil = foto_de_perfil
    def to_dict(self):
        return self.__dict__
    