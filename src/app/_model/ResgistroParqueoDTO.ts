import { VehiculoDTO } from "./VehiculoDTO";

export class RegistroParqueoDTO{

    idRegistroParqueo!: number;
    vehiculoDTO!: VehiculoDTO;
    horaFechaIngreso!: string;
    horaFechaSalida! : string;
    tiempoParqueo! : number;
    estado! : boolean;
}
