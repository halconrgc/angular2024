import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
    public name:string ='Ricardo';
    public edad:number=43;
  get aMayuscNombre():string{
    return this.name.toUpperCase();
  }
 public  cambiarAlumno():void{
     this.name='Jonathan';
 }
 public cambiarEdad():void{
  this.edad=18;
 }
 public resetForm():void{
  this.name='Ricardo';
  this.edad=43;
 }
  }

