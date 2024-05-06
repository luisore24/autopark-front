import { Marca } from "./Marca";
import { TipoVehiculo } from "./TipoVehiculo";

export class Vehiculo{
    id?:number;
    placa?:string;
    color?:string;
    tipoVehiculo?: TipoVehiculo;
    marca?:Marca;
}