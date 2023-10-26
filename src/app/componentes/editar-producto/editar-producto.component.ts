import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent  {
  // formularioProducto:FormGroup;
  // elId:any;

  // constructor( 
  //     private activeRoute:ActivatedRoute,
  //     private crudService:CrudService,
  //     private formulario:FormBuilder,
  //     private ruteador:Router
      
  //     ){
    // this.elId=this.activeRoute.snapshot.paramMap.get('id');
    // console.log(this.elId);
    // this.crudService.ObtenerUnProducto(this.elId).subscribe(respuesta=>{
    //   console.log(respuesta)
    //   this.formularioProducto.setValue({
    //     codigo:respuesta[0]['codigo'],
    //     nombre:respuesta[0]['nombre']
    //   })
    // });

    // this.formularioProducto=this.formulario.group({
    //   codigo:[''],
    //   nombre:['']
    // });
  //}

  // ngOnInit(): void {
  // }

  // enviarDatos():any{
  //     console.log(this.elId);
  //     console.log(this.formularioProducto.value);
  //     this.crudService.EditarProductos(this.elId, this.formularioProducto.value).subscribe(
  //       ()=>{   this.ruteador.navigateByUrl('/listar-producto')
  //     });

  // }

}
