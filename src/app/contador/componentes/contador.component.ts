import { Component,  } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title}}</h1>
    <hr>
    <h2>contador :{{contador}}</h2>
    <button (click)="increntarPor(+1)">+1</button>
    
    <button (click)="reset()">reset</button>
    <button (click)="increntarPor(-1)">-1</button>`,
}) 
export class ContadorComponent{
    public title:string='Yo soy el app component';
    public contador:number=10;
    addCounter ():void{
      this.contador+=1;
    } 
  
    subCounter ():void{
      this.contador-=1;
    } 
    increntarPor(num:number):void{
        this.contador+=num;
    }
    reset():void{
      this.contador=10;
    }
}