using System;
using Xunit;
using Backend.Models;

namespace Test.User
{
    public class UserTest
    {
        [Fact]
        public void CriarUsuario()
        {
            Usuario novoUsuario = new Usuario("Lucas", "Belo Horizonte");

            Assert.Equal("Lucas", novoUsuario.Nome);
            Assert.Equal("Belo Horizonte", novoUsuario.Cidade);

        }

    }
}
