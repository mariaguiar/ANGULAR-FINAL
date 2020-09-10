export class Disco {

    public id: number;
    public titulo: string;
    public interprete: string;
    public anyoPublicacion: number

    constructor(id, titulo, interprete, anyoPublicacion)
    {
        this.id = id;
        this.titulo = titulo;
        this.interprete = interprete;
        this.anyoPublicacion = anyoPublicacion
    }
}
