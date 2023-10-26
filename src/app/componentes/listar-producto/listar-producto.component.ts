import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';


@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {

  Productos:any;

  constructor(
    private crudservice:CrudService
  ){}

  ngOnInit(): void {
    //   this.crudservice.ObtenerProducto().subscribe(respuesta=>{
    //   console.log(respuesta);
    //   this.Productos=respuesta;
    // });
  }

  borrarRegistro(codigo:any,iControl:any){
    // console.log(codigo);
    // console.log(iControl)
    // if(window.confirm("¿Desea Borrar el registro")){
    //   this.crudservice.BorrarProductos(codigo).subscribe((respuesta)=>{
    //     this.Productos.splice(iControl,1)
    //   });
    // }
  

    //respuesta guarda lo que me devuelva la api
  }


}
