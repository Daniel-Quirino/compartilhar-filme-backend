
using System;
using Xunit;
using Backend.Models;
namespace Test.User
{​
    public class UserTest
    {​
        [Fact]
        public void CriarUsuario()
        {​
            Usuario novoUsuario = new Usuario("Lucas", "Belo Horizonte");
            Assert.Equal("Lucas", novoUsuario.Nome);
            Assert.Equal("Belo Horizonte", novoUsuario.Cidade);
        }​
        [Fact]
        public void CriarUsuarioDadosDiferentes()
        {​
            Usuario novoUsuario = new Usuario("Daniel", "Diamantina");
            Assert.Equal("Daniel", novoUsuario.Nome);
            Assert.Equal("Diamantina", novoUsuario.Cidade);
        }​
        [Fact]
        public void FormatarNomeComLetrasMaiusculaIniciais()
        {​
            Usuario novoUsuario = new Usuario("DANIEL QUIRINO", "Diamantina");
            Assert.Equal("Daniel Quirino", Usuario.formatarNomeComLetrasMaiusculaIniciais("DANIEL QUIRINO"));
            Assert.Equal("Diamantina", novoUsuario.Cidade);
        }​
    }​
}​
