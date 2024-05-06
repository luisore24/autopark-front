import { TipoDocumento } from "./TipoDocumento";

export class Cliente{
    id?:number;
    tipoDocumento?: TipoDocumento;
    dni?:string;
    nombres?:string;
    apePaterno?:string;
    apeMaterno?:string;
    fechaNacimiento?:Date;
    email?:string;
}