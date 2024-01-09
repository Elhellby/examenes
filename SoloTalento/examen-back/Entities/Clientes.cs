using System;
using System.ComponentModel.DataAnnotations;

namespace examen_back.Entities;

public class Clientes
{
    [Key]
    public int IdCliente { get; set; }
    public string? Nombre { get; set; }
    public string? Apellidos { get; set; }
    public string? Direccion { get; set; }
}
