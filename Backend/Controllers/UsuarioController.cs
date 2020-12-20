using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers
{
    public class UsuarioController : Controller

    {
        [HttpGet("v1/usuarios")]

        public IActionResult LisTarUsuarios()
        {
            return Ok
               (
                    new List<Usuario> 
                    { 
                        new Usuario (
                            "Daniel Quirino",
                            "Diamantina"
                        ),
                        new Usuario (
                            "Davi Quirino",
                            "Belo Horizonte"
                        )
                    }
                );         
        }


        [HttpPost("v1/usuarios")]

        public IActionResult CriarUsuarios([FromBody] Usuario usuario)
        {
            return Ok();
        }


        [HttpPut("v1/usuarios/{id}")]

        public IActionResult AlterarUsuarios(Guid id, [FromBody]Usuario usuario)
        {
            return Ok();
        }

        [HttpGet("v1/usuarios/{id}")]

        public IActionResult ObterUsuario(Guid id)
        {
            return Ok(
                new Usuario(
                    "Daniel Quirino",
                    "Diamantina"
                )
            );
        }

        [HttpDelete("v1/usuarios/{id}")]

        public IActionResult deleteUsuario(Guid id)
        {
            return Ok(
                new Usuario(
                    "Daniel Quirino",
                    "Diamantina"
                )
            );
        }


    }
}
