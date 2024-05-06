import { TipoDocumentoDTO } from "./TipoDocumentoDTO";

export class ClienteDTO{
    id!:number;
    tipoDocumentoDTO!: TipoDocumentoDTO;
    dni!:string;
    nombres!:string;
    apePaterno!:string;
    apeMaterno!:string;
    email!:string;
}