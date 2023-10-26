import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router'; //manejo de rutas

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  // formularioProducto:FormGroup;

  // constructor(
  //   public formulario:FormBuilder,
  //   private crudService:CrudService,
  //   private ruteador:Router 
  //   ){
  //   this.formularioProducto=this.formulario.group({
  //     codigo:[''],
  //     nombre:['']
  //   });
  // }

  // enviarDatos():any{
  //   console.log("me presionaste");
  //   console.log(this.formularioProducto.value);
  //   this.crudService.AgregarProductos(this.formularioProducto.value).subscribe(()=>{
  //     this.ruteador.navigateByUrl('/listar-producto')
  //   });
    
  // }
}
