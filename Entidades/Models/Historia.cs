﻿using System;
using System.Collections.Generic;

namespace Entidades.Models;

public partial class Historia
{
    public int Id { get; set; }

    public int? PacienteId { get; set; }

    public string? ExamenFisico { get; set; }

    public string? Ta { get; set; }

    public double? Peso { get; set; }

    public double? Talla { get; set; }

    public double? Imc { get; set; }

    public int? CircCintura { get; set; }

    public int? CircCadera { get; set; }

    public int? Icc { get; set; }

    public int? Saturacion { get; set; }

    public double? Temperatura { get; set; }

    public int? Glicemia { get; set; }

    public string? AgudezaDer { get; set; }

    public string? AgudezaIzq { get; set; }

    public int? Ecografia { get; set; }

    public string? ObservacionEco { get; set; }

    public int? Ecg { get; set; }

    public string? ObservacionEcg { get; set; }

    public int? Radiografia { get; set; }

    public string? ObservacionRadiografia { get; set; }

    public int? Laboratorio { get; set; }

    public string? ObservacionLab { get; set; }

    public string? EstudiosComp { get; set; }

    public string? Diagnostico { get; set; }

    public string? Tratamiento { get; set; }

    public int? DerivacionAguda { get; set; }

    public int? DerivacionProg { get; set; }

    public string? ObservacionDeriv { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public DateTime? LastUpdated { get; set; }
}
