using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Repositories
{
    interface IUsuarioRepository
    {
        void Adicionar(Usuario usuario);
        void Alterar(Usuario usuario);
        IEnumerable<Usuario> ListarUsuarios();
        Usuario Obterusuario(Guid id);
        void RemoverUsuario(Guid id);
    }
}
