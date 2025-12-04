export interface Propiedad {
  id: number;
  titulo: string;
  descripcion: string;
  precio: string;      // DecimalField → string
  habitaciones: string;
  banos: string;
  municipio: string;
  ciudad: string;
  barrio: string;
  direccion: string;

  tipo_negocio: "COMP" | "ARR";
  tipo_propiedad: "CASA" | "APARTAMENTO" | "LOTE" | "LOCAL";

  main_image: string | null;

  agente: Agente | null;

  imagenes: ImagenPropiedad[];
}

export interface ImagenPropiedad {
  id: number;
  foto_propiedad: string;
}

export interface Agente {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono?: string;
  foto?: string;
}


export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  foto_perfil: string | null;
  username: string;
}

export interface PropiedadFilter {
  tipo_negocio?: "COMP" | "ARR";
  tipo_propiedad?: "CASA" | "APARTAMENTO" | "LOTE" | "LOCAL";
  ciudad?: string;
  minPrecio?: number;
  maxPrecio?: number;
}