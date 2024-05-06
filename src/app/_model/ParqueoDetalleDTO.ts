import { EstacionamientoDTO } from "./EstacionamientoDTO";
import { ParqueoDTO } from "./ParqueoDTO";
import { VehiculoDTO } from "./VehiculoDTO";

export class ParqueoDetalleDTO {

    id! : number;
    vehiculoDTO! : VehiculoDTO;
    cantidad! : number;
    preciovta! : number;
    importe! : number;
    horaingreso! : string;
    horasalida! : string;
    estacionamientoDTO! : EstacionamientoDTO;
    parqueoDTO! : ParqueoDTO;

}