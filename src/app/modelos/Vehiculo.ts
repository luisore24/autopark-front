export class Vehiculo{
    id_vehiculo:number;
    placa:string;
    color:string;
    tipoVehiculoDTO:{
        id:number,
        des_tipoVehiculo:string;}
    marcaDTO: {
        id:number,
        des_marca: string;};
    clienteDTO:{
        id:number,
        nombres:string;
        apePaterno:string;};
    

    constructor(){
        this.id_vehiculo=0;
        this.placa="";
        this.color="";
        this.tipoVehiculoDTO={
            id:0,
            des_tipoVehiculo:""};
        this.marcaDTO = {
            id:0,
            des_marca: ""};
        this.clienteDTO={
            id:0,
            nombres:"",
            apePaterno:""};
        
        
    }
}