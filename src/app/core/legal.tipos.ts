/**
 * Bloques con los que se arman las páginas legales. El contenido es estático y
 * lo escribimos nosotros (no entra nada del usuario), por eso `texto` admite
 * HTML simple —enlaces y <strong>— y se pinta con [innerHTML].
 */
export type Bloque =
  | { tipo: 'h2'; texto: string; id: string }
  | { tipo: 'p'; texto: string }
  | { tipo: 'lista'; items: string[] }
  | { tipo: 'tabla'; encabezados: [string, string]; filas: [string, string][] }
  | { tipo: 'aviso'; titulo: string; texto: string }
  | { tipo: 'pasos'; items: { t: string; d: string }[] };

export interface PaginaLegal {
  titulo: string;
  entradilla: string;
  bloques: Bloque[];
}

export interface Legal {
  privacidad: PaginaLegal;
  eliminar: PaginaLegal;
  soporte: PaginaLegal;
}
