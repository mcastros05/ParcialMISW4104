export class Planta {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: string;
  sustratoSiembra: string;

  constructor(
    id: number,
    nombreComun: string,
    nombreCientifico: string,
    tipo: string,
    alturaMaxima: number,
    clima: string,
    sustratoSiembra: string,
  ) {
    this.id = id;
    this.nombre_comun = nombreComun;
    this.nombre_cientifico = nombreCientifico;
    this.tipo = tipo;
    this.altura_maxima = alturaMaxima;
    this.clima = clima;
    this.sustratoSiembra = sustratoSiembra;
  }
}
