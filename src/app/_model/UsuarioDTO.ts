import { TipoDocumentoDTO } from "./TipoDocumentoDTO";
import { RolDTO } from "./RolDTO";

export class UsuarioDTO {

    idUsuario! : number;
    name! : string;
    lastname! : string;
    tipoDocumentoDTO! : TipoDocumentoDTO;
    nroDocumento! : string;
    correo! : string;
    telefono! : string;
    rolDTO! : RolDTO;
    username! : string;
    password! : string;

}