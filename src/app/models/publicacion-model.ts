export interface Publicacion {
    idPublicacion: number,
    FK_idUsuario: number,
    estadoPublicacion: string,
    fechaPublicacion: string,
    contenido: string
}
