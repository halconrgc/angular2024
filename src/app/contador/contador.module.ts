import { NgModule } from "@angular/core";
import { ContadorComponent } from "./componentes/contador.component";


@NgModule({
    declarations:[ContadorComponent],
    exports:[ContadorComponent]
})
export class ContdorModulo{}