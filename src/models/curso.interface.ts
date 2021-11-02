export interface Curso{
    id: string,
    nombre: string,
    duracion: string,
    fecha_inicio: Date,
    descripcion: string,
    url: string,
    profesores: Profesor,

}

export interface Profesor{
    nombre: string,
    apellido: string,
    titulo: string,
}