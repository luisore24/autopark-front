import { MarcaDTO } from "./MarcaDTO";
import { TipoVehiculoDTO } from "./TipoVehiculoDTO";

export class VehiculoDTO{
    id!:number;
    placa!:string;
    color!:string;
    tipoVehiculoDTO!: TipoVehiculoDTO;
    marcaDTO!:MarcaDTO;
}