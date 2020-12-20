using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Usuario
    {
        public Usuario(string nome, string cidade)
        {
            Id = Guid.NewGuid();
            Nome = nome;
            Cidade = cidade;
            DataInsercao = new DateTime();

        }
        public Guid Id { get; }
        public string Nome { get; set; }
        public string Cidade { get; set;}
        public DateTime? DataInsercao { get; set; }
    }
}
