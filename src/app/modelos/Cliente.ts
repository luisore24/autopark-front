export class Cliente{
    id:number;
    tipoDocumentoDTO:{
        idTipoDocumento:number,
        descripcion:string;}
    dni:string;
    nombres:string;
    apePaterno:string;
    apeMaterno:string;
    fechaNacimiento:Date;
    email:string;

    constructor(){
        this.id=0;
        this.tipoDocumentoDTO={
            idTipoDocumento:0,
            descripcion:""};
        this.dni="";
        this.nombres="";
        this.apePaterno="";
        this.apeMaterno="";
        this.fechaNacimiento = new Date(1950,0,1);
        this.email="";
    }
}