import { Component } from '@angular/core';
import {FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router'; //manejo de rutas


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {
  //formularioProducto:FormGroup;
  citaForm: FormGroup;
  minDate: string;
  errorMessage: string = ''; 
  exitMessage: string = ''; 

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router,
    ){

      const currentDate = new Date();
      const currentISODate = currentDate.toISOString().substr(0, 10);
      this.minDate = currentISODate; 

      this.citaForm = this.formulario.group({
        nombres: ['', Validators.required],
        correo: ['', [Validators.required, Validators.email]],
        celular: ['', Validators.required],
        fecha: [currentISODate, Validators.required],
        hora: ['', Validators.required],
        procedimiento: ['', Validators.required],
      });


  }

  enviarDatos(): any {
    console.log("me presionaste");
    console.log(this.citaForm.value);
    this.exitMessage = '';
    this.errorMessage = '';
    
    this.crudService.AgregarCita(this.citaForm.value).subscribe(
      response => {
        if (response.success === 1) {
          console.log("Cita agendada exitosamente");
         // this.ruteador.navigateByUrl('/inicio');
         // Limpiar el formulario
         this.citaForm.reset();
         this.exitMessage = response.message;
         this.errorMessage = '';
        } else if(response.success === 0){
          console.log("Error al agendar la cita:", response.message);
          this.errorMessage = response.message;
          this.exitMessage = '';
        }
      },
      error => {
        console.log("Error al agendar la cita:", error);
        this.errorMessage = "Error al agendar la cita: " + error.message;
      }
    );
  }
  
  
}
