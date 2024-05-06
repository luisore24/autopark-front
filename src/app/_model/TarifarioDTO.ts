import { TipoVehiculoDTO } from "./TipoVehiculoDTO";

export class TarifarioDTO{

    idtarifa! : number;
    descripcion! : string;
    tipoVehiculoDTO! : TipoVehiculoDTO;
    monto! : number;

}