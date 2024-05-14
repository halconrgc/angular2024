import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'inicio';
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
