import { ClienteDTO } from "./ClienteDTO";
import { ParqueoDetalleDTO } from "./ParqueoDetalleDTO";
import { UsuarioDTO } from "./UsuarioDTO";

export class ParqueoDTO{

id! : number;
fechaParqueo!:string
clienteDTO!: ClienteDTO;
parqueoDetalleDTO! : ParqueoDetalleDTO[];
usuarioDTO! : UsuarioDTO;

}