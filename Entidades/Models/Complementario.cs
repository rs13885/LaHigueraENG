﻿using System;
using System.Collections.Generic;

namespace Entidades.Models;

public partial class Complementario
{
    public int Id { get; set; }

    public int? PacienteId { get; set; }

    public string? LugarNac { get; set; }

    public string? ParajeResidencia { get; set; }

    public string? Etnia { get; set; }

    public string? EstadoCivil { get; set; }

    public int? SabeLeer { get; set; }

    public string? Escolaridad { get; set; }

    public string? Ocupacion { get; set; }

    public int? AnoIngreso { get; set; }

    public string? Notas { get; set; }

    public string? FechaCreacion { get; set; }

    public DateTime? LastUpdated { get; set; }
}
