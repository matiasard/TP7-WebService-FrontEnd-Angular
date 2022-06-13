export interface LibroDestacado {
  ok: boolean;
  msg: string;
  destacados: Destacado[];
}

export interface Destacado {
  _id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  stock: number;
  destacado: boolean;
  __v: number;
}
