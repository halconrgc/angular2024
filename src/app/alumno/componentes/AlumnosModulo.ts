
import { NgModule } from "@angular/core";
import { AlumnoComponent } from "./alumno/alumno.component";
import { ListaComponent } from "./lista/lista.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
        AlumnoComponent,
        ListaComponent],
    exports:[
        AlumnoComponent,
        ListaComponent,
    ],
    imports:[
        CommonModule
    ]
})
export class AlumnosModulo{}