import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //ayuda a establecer la comunicacion con la api
import { Observable } from 'rxjs'; //ayuda a estar monitoreando lo que estara sucediendo con la información
//import { Producto } from './Producto';  //modelo
import { citas } from './citas';


@Injectable({
  providedIn: 'root'
})
export class CrudService {


//API: string='http://localhost/bonitapeluqueria/'; //api de php CRUD
API: string = 'http://localhost/AdminPeluqueria/public/api/citas';

  constructor(private clienteHttp:HttpClient) {}

    // AgregarProductos(datosProducto:Producto):Observable<any>{
    //   return this.clienteHttp.post(this.API+"?insertar=1",datosProducto);
    // }

    // ObtenerProducto(){ //consultar información
    //   return this.clienteHttp.get(this.API);
    // }

    // BorrarProductos(codigo:any):Observable<any>{
    //   return this.clienteHttp.get(this.API+"?borrar="+codigo);
    // }

    // ObtenerUnProducto(codigo:any):Observable<any>{
    //   return this.clienteHttp.get(this.API+"?consultar="+codigo);
    // }

    // EditarProductos(id:any,datosProducto:any):Observable<any>{
    //   return this.clienteHttp.post(this.API+"?actualizar="+id,datosProducto);
    // }

    AgregarCita(datosCita:citas):Observable<any>{
      return this.clienteHttp.post(this.API,datosCita);
    }   


  
}

